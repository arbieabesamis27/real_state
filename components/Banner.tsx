import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type BannerProps = {
  purpose: string;
  imageUrl: string;
  title1: string;
  title2: string;
  desc1: string;
  desc2: string;
  linkName: string;
  buttonText: string;
};
const Banner = ({
  purpose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}: BannerProps) => {
  return (
    <div className="flex flex-wrap justify-center items-center m-10">
      <Image src={imageUrl} width={500} height={300} alt="Banner" />
      <div className="p-5">
        <p className="text-gray-500 text-sm font-medium">{purpose}</p>
        <p className=" text-3xl font-bold">
          {title1} <br />
          {title2}
        </p>
        <p className="text-gray-700 text-lg font-medium pt-3 pb-3 ">
          {desc1}
          <br />
          {desc2}
        </p>
        <Button asChild className="text-xl bg-blue-300 text-white">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
