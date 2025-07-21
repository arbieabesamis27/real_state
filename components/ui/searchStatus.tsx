"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { SearchIcon } from "./icons/searchIcon";
import { Spinner } from "./icons/spinner";

export default function SearchStatus({ searching }: { searching?: boolean }) {
  const { pending } = useFormStatus();
  const isSearching = searching || pending;

  return (
    <div className="absolute left-2 top-[10px] sm:top-[15px]">
      {isSearching ? (
        <div aria-label="searching..." className="h-fit w-fit animate-spin">
          <Spinner
            aria-hidden="true"
            size={"xsmall"}
            className="text-gray-500"
          />
        </div>
      ) : (
        <SearchIcon
          aria-hidden="true"
          width={16}
          height={16}
          className="text-gray-500"
        />
      )}
    </div>
  );
}
