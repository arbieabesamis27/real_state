import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { PrismaClient } from "@/generated/prisma";
import ImageScrollbar from "@/components/ImageScrollbar";
import noresult from "@/app/assets/noresult.svg";

const prisma = new PrismaClient();

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

// type PropertyType = {
//   id: number;
//   purpose: string;
//   title: string;
//   description: string;
//   price: number;
//   rentFrequency: string;
//   location: string;
//   area: number;
//   bedrooms: number;
//   bathrooms: number;
//   images: string;
//   agency: string;
//   isVerified: boolean;
//   createdAt: Date;
// };

type PropertyPageProps = {
  params: { id?: string };
};

const PropertyDetails = async ({ params }: PropertyPageProps) => {
  const { id } = params;
  const property = await prisma.property.findFirst({
    where: { id },
  });

  if (!property) {
    return (
      <div className="flex flex-col items-center mt-20">
        <Image src={noresult} alt="Not Found" />
        <p className="text-xl mt-4 text-gray-600">Property not found.</p>
      </div>
    );
  }

  const images = Array.isArray(property.images)
    ? property.images
    : JSON.parse(property.images || "[]");

  return (
    <div className="max-w-[1000px] p-4 m-auto">
      {images && <ImageScrollbar data={images} />}
      <div className="w-full p-6">
        <div className="flex pt-2 justify-between ">
          <div className="pr-3 text-green-400">
            {property?.isVerified && <GoVerified />}
          </div>
          <p className="font-bold text-lg">
            AED {property?.price}{" "}
            {property?.rentFrequency && `/${property?.rentFrequency}`}
          </p>
          <div className="flex-1 flex justify-end">
            <Avatar>
              <AvatarImage src={property?.agency} alt="Agency Logo" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className=" flex items-center p-1 justify-between w-[250px] text-blue-400">
          {property?.bedrooms}
          <FaBed /> | {property?.bathrooms} <FaBath /> |{" "}
          {millify(property?.area)} sqft <BsGridFill />
        </div>
      </div>
      <div className=" p-6">
        <p className="text-lg mb-2 font-bold">{property?.title}</p>
        <p className="leading-4 text-gray-600">{property?.description}</p>
      </div>
      <div className="p-4 flex flex-wrap uppercase justify-between">
        <div className="flex justify-between w-[400px] border-b-1 border-gray-100 p-3">
          <p>Purpose</p>
          <p className="font-bold">{property?.purpose}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
