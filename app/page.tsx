import { Prisma, PrismaClient } from "@/generated/prisma";
import Banner from "@/components/Banner";
import Property from "@/components/Property";
import { Suspense } from "react";
import Loading from "./(pages)/search/loading";

const prisma = new PrismaClient();

export default async function Home() {
  const whereSale: Prisma.PropertyWhereInput = { purpose: "for-sale" };
  const whereRent: Prisma.PropertyWhereInput = { purpose: "for-rent" };

  const orderBy: Prisma.PropertyOrderByWithRelationInput = {
    createdAt: "desc",
  };
  return (
    <>
      <div>
        <Banner
          purpose={"RENT A HOME"}
          imageUrl={
            "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
          }
          title1={"Rental Homes for"}
          title2={"Everyone"}
          desc1={"Explore Apartments, Villas, Homes"}
          desc2={"and more"}
          buttonText={"Explore Renting"}
          linkName={"/search?purpose=for-rent"}
        />
        <Suspense fallback={<Loading />}>
          <Property where={whereRent} orderBy={orderBy} />
        </Suspense>
        <Banner
          purpose={"BUY A HOME"}
          imageUrl={
            "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
          }
          title1={"Find, Buy & Own Your"}
          title2={"Dream Home"}
          desc1={"Explore Apartments, Villas, Homes"}
          desc2={"and more"}
          buttonText={"Explore Buying"}
          linkName={"/search?purpose=for-sale"}
        />
        <Suspense fallback={<Loading />}>
          <Property where={whereSale} orderBy={orderBy} />
        </Suspense>
      </div>
    </>
  );
}
