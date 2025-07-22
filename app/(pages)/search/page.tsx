import React, { Suspense } from "react";
import SearchFilters from "@/components/SearchFilters";
import Property from "@/components/Property";
import { Prisma } from "@/generated/prisma";
import Loading from "./loading";

type SearchParams = {
  searchParams: Promise<{
    search?: string;
    purpose?: string;
    minPrice?: string;
    maxPrice?: string;
    bathsMin?: string;
    roomsMin?: string;
    rentFrequency?: string;
    areaMax?: string;
    sort?: string;
  }>;
};

const page = async ({ searchParams }: SearchParams) => {
  const {
    search,
    purpose,
    rentFrequency,
    maxPrice,
    minPrice,
    bathsMin,
    roomsMin,
    areaMax,
    sort,
  } = await searchParams;

  const filters: Prisma.PropertyWhereInput[] = [];

  if (search) {
    filters.push({
      OR: [{ title: { contains: search } }, { location: { contains: search } }],
    });
  }

  if (purpose) filters.push({ purpose });

  if (rentFrequency) filters.push({ rentFrequency });

  if (minPrice || maxPrice) {
    filters.push({
      price: {
        ...(minPrice ? { gte: Number(minPrice) } : {}),
        ...(maxPrice ? { lte: Number(maxPrice) } : {}),
      },
    });
  }

  if (bathsMin) filters.push({ bathrooms: { gte: Number(bathsMin) } });
  if (roomsMin) filters.push({ bedrooms: { gte: Number(roomsMin) } });
  if (areaMax) filters.push({ area: { lte: Number(areaMax) } });

  const where: Prisma.PropertyWhereInput =
    filters.length > 0 ? { AND: filters } : {};

  const orderBy: Prisma.PropertyOrderByWithRelationInput =
    sort === "price-asc"
      ? { price: "asc" }
      : sort === "price-desc"
      ? { price: "desc" }
      : { createdAt: "desc" };

  return (
    <div>
      <SearchFilters />
      <p className="text-2xl p-4 font-bold">Properties: {search}</p>
      <Suspense fallback={<Loading />}>
        <Property where={where} orderBy={orderBy} />
      </Suspense>
    </div>
  );
};

export default page;
