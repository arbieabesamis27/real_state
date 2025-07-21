import React from "react";
import Link from "next/link";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="flex justify-between p-2 border-b-[1px] border-gray-100">
      <div className="text-3xl text-blue-400 font-bold">
        <Link href={"/"} className="pl-2">
          Realtor
        </Link>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-red-400" variant="outline">
              <FcMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuGroup>
              <Link href={"/"} passHref>
                <DropdownMenuItem>
                  <FcHome />
                  Home
                </DropdownMenuItem>
              </Link>
              <Link href={"/search"} passHref>
                <DropdownMenuItem>
                  <BsSearch />
                  Search
                </DropdownMenuItem>
              </Link>
              <Link href={"/search?prupose=for-sale"} passHref>
                <DropdownMenuItem>
                  <FcAbout />
                  Buy Property
                </DropdownMenuItem>
              </Link>
              <Link href={"/search?prupose=for-rent"} passHref>
                <DropdownMenuItem>
                  <FiKey />
                  Rent Property
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
