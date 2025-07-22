import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import DefaultImage from "../app/assets/house.jpg";
import { Prisma, PrismaClient } from "@/generated/prisma";
import noresult from "../app/assets/noresult.svg";

const prisma = new PrismaClient();

const Property = async ({
  where,
  orderBy,
}: {
  where: Prisma.PropertyWhereInput;
  orderBy: Prisma.PropertyOrderByWithRelationInput;
}) => {
  const properties = await prisma.property.findMany({
    where,
    orderBy,
    take: 50,
  });

  return (
    <div className="flex flex-wrap justify-center">
      {properties.length > 0 ? (
        properties.map((property) => {
          const images = Array.isArray(property.images)
            ? property.images
            : JSON.parse(property.images || "[]");

          const mainImage = images?.[0] ?? DefaultImage;

          return (
            <Link key={property.id} href={`/property/${property.id}`} passHref>
              <div className="flex flex-wrap w-[420px] p-5 pt-0 justify-start cursor-pointer">
                <div>
                  <Image src={mainImage} width={400} height={260} alt="house" />
                </div>
                <div className="w-full">
                  <div className="flex pt-2 items-center justify-between">
                    <div className="flex items-center">
                      <div className="pr-3 text-green-400">
                        {property.isVerified && <GoVerified />}
                      </div>
                      <p className="text-bold text-lg">
                        AED {millify(property.price)}
                        {property.rentFrequency && `/${property.rentFrequency}`}
                      </p>
                    </div>
                    <Avatar>
                      <AvatarImage src={property.agency} alt="Agency Logo" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex items-center p-1 justify-between w-[250px] text-blue-400">
                    {property.bedrooms} <FaBed /> | {property.bathrooms}{" "}
                    <FaBath /> | {millify(property.area)} sqft <BsGridFill />
                  </div>
                  <p className="text-lg">
                    {property.title.length > 30
                      ? `${property.title.substring(0, 30)}...`
                      : property.title}
                  </p>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <div className="flex flex-1 justify-center items-center flex-col mt-5 mb-5">
          <Image alt="no result" src={noresult} />
          <p className="text-2xl mt-3">No Results Found</p>
        </div>
      )}
    </div>
  );
};

export default Property;
