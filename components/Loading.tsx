import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Skeleton className="flex flex-wrap w-[420px] p-5 pt-0 justify-start cursor-pointer">
      <Skeleton className="w-[400px] h-[260px]" />
      <Skeleton className="w-full">
        <Skeleton className="flex pt-2 items-center justify-between">
          <Skeleton className="flex items-center">
            <Skeleton className="pr-3 text-green-400">
              <Skeleton className="w-1 h-1 rounded-xs" />
            </Skeleton>
            <Skeleton className="w-1 h-1 rounded-xs" />
          </Skeleton>
          <Skeleton className="w-1 h-1 rounded-xs" />
        </Skeleton>
        <Skeleton className="flex items-center p-1 justify-between w-[250px] text-blue-400">
          <Skeleton className="w-1 h-1 rounded-xs" />
          <Skeleton className="w-1 h-1 rounded-xs" />
          <Skeleton className="w-1 h-1 rounded-xs" />
          <Skeleton className="w-1 h-1 rounded-xs" />
          <Skeleton className="w-1 h-1 rounded-xs" />
          <Skeleton className="w-1 h-1 rounded-xs" />
        </Skeleton>
        <Skeleton className="h-5 mb-1 w-[80%]" />
      </Skeleton>
    </Skeleton>
  );
};

export default Loading;
