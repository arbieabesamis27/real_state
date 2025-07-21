"use client";
import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div className="flex mr-1 items-center justify-center cursor-pointer">
      <FaArrowCircleLeft size={30} onClick={() => scrollPrev()} />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div className="flex ml-1 items-center justify-center cursor-pointer">
      <FaArrowCircleRight size={30} onClick={() => scrollNext()} />
    </div>
  );
};
export default function ImageSrollbar({ data }: { data: string[] }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item, index) => (
        <div
          className="p-1 w-[910px] overflow-hidden"
          itemID={`item-${index}`}
          key={index}
        >
          <Image
            placeholder="blur"
            blurDataURL={item}
            src={item}
            alt={`property`}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
          />
        </div>
      ))}
    </ScrollMenu>
  );
}
