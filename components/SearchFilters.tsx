"use client";

import { useQueryState } from "nuqs";
import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { BsFilter } from "react-icons/bs";
import SearchStatus from "./ui/searchStatus";

const priceOptions = [50000, 100000, 200000, 300000, 500000, 1000000];
const bathroomOptions = [1, 2, 3, 4, 5];
const bedroomOptions = [1, 2, 3, 4, 5];

export default function SearchFilters() {
  const [searchFilters, setSearchFilters] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useQueryState("search", {
    shallow: false,
    startTransition,
  });
  const [purpose, setPurpose] = useQueryState("purpose", {
    shallow: false,
    startTransition,
  });
  const [minPrice, setMinPrice] = useQueryState("minPrice", {
    shallow: false,
    startTransition,
  });
  const [maxPrice, setMaxPrice] = useQueryState("maxPrice", {
    shallow: false,
    startTransition,
  });
  const [bathsMin, setBathsMin] = useQueryState("bathsMin", {
    shallow: false,
    startTransition,
  });
  const [roomsMin, setRoomsMin] = useQueryState("roomsMin", {
    shallow: false,
    startTransition,
  });
  const [rentFrequency, setRentFrequency] = useQueryState("rentFrequency", {
    shallow: false,
    startTransition,
  });
  const [sort, setSort] = useQueryState("sort", {
    shallow: false,
    startTransition,
  });
  const [areaMax, setAreaMax] = useQueryState("areaMax", {
    shallow: false,
    startTransition,
  });

  const clearAllFilters = () => {
    setSearch(null);
    setPurpose(null);
    setMinPrice(null);
    setMaxPrice(null);
    setBathsMin(null);
    setRoomsMin(null);
    setRentFrequency(null);
    setSort(null);
    setAreaMax(null);
  };
  return (
    <div>
      <div
        className="flex cursor-pointer bg-gray-100 border-b border-gray-200 p-2 font-black text-lg justify-center items-center"
        onClick={() => setSearchFilters((prev) => !prev)}
      >
        <p>Search Property By Filters</p>
        <span className="pl-2 w-7">
          <BsFilter />
        </span>
      </div>

      {searchFilters && (
        <div className="flex justify-center bg-gray-100 p-3  ">
          <div className="max-w-3xl flex flex-wrap justify-center ">
            <div className="w-full sm:max-[1600px]:flex-1/2 sm:w-fit relative">
              <Input
                className="text-gray-600 pl-7 sm:absolute top-1 "
                placeholder="Search title/location"
                value={search || ""}
                onChange={(e) => {
                  const value = e.target.value.trim();
                  setSearch(value === "" ? null : value);
                }}
              />
              <SearchStatus searching={isPending} />
            </div>
            <Select value={purpose ?? ""} onValueChange={setPurpose}>
              <SelectTrigger className="w-fit p-2 m-1">
                <SelectValue placeholder={"Purpose"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Purpose</SelectLabel>
                  <SelectItem value="for-sale">For Sale</SelectItem>
                  <SelectItem value="for-rent">For Rent</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select value={minPrice ?? ""} onValueChange={setMinPrice}>
              <SelectTrigger className="w-fit p-2 m-1">
                <SelectValue placeholder="Min Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Min Price</SelectLabel>

                  {priceOptions.map((p) => (
                    <SelectItem key={p} value={String(p)}>
                      {p.toLocaleString()}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select value={maxPrice ?? ""} onValueChange={setMaxPrice}>
              <SelectTrigger className="w-fit p-2 m-1">
                <SelectValue placeholder="Max Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Max Price</SelectLabel>

                  {priceOptions.map((p) => (
                    <SelectItem key={p} value={String(p)}>
                      {p.toLocaleString()}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={roomsMin ?? ""} onValueChange={setRoomsMin}>
              <SelectTrigger className="w-fit p-2 m-1">
                <SelectValue placeholder="Min Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Min Bedrooms</SelectLabel>

                  {bedroomOptions.map((r) => (
                    <SelectItem key={r} value={String(r)}>
                      {r} rooms
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={bathsMin ?? ""} onValueChange={setBathsMin}>
              <SelectTrigger className="w-fit p-2 m-1">
                <SelectValue placeholder="Min Bathrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Min Bathrooms</SelectLabel>

                  {bathroomOptions.map((b) => (
                    <SelectItem key={b} value={String(b)}>
                      {b} baths
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select
              value={rentFrequency ?? ""}
              onValueChange={setRentFrequency}
            >
              <SelectTrigger className="w-fit p-2 m-1">
                <SelectValue placeholder="Rent Frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Rent Frequency</SelectLabel>

                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={sort ?? ""} onValueChange={setSort}>
              <SelectTrigger className="w-fit p-2 m-1">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort By</SelectLabel>

                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="price-asc">Price ↑</SelectItem>
                  <SelectItem value="price-desc">Price ↓</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Input
              className="text-[15px] w-fit text-gray-600 m-1 max-w-[150px]"
              type="number"
              placeholder="Max Area (sqm)"
              value={areaMax ?? ""}
              onChange={(e) => {
                const value = e.target.value.trim();
                setAreaMax(value === "" ? null : value);
              }}
            />

            <Button
              variant="outline"
              onClick={clearAllFilters}
              className="text-gray-500 m-1 bg-gray-100"
            >
              Clear All Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
