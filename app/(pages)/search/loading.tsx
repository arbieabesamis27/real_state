import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  const array = new Array(6).fill(null);
  return (
    <div className="flex flex-wrap justify-center">
      {array.map((_, i) => (
        <Skeleton
          key={i}
          className="flex flex-wrap w-[420px] justify-center m-2"
        >
          <Skeleton className="w-full h-[260px] bg-gray-200" />
          <Skeleton className="w-full p-3">
            <Skeleton className="flex pt-2 items-center justify-between">
              <Skeleton className="flex w-full justify-between p-1">
                <Skeleton className="w-[60%] h-4 bg-gray-200" />
                <Skeleton className="w-4 h-4 rounded-xl bg-gray-200" />
              </Skeleton>
            </Skeleton>
            <Skeleton className="flex p-2 gap-6 justify-start w-[80%]">
              <Skeleton className="w-4 h-4 rounded-xs bg-gray-200" />
              <Skeleton className="w-5 h-4 rounded-xs bg-gray-200" />
              <Skeleton className="w-2 h-4 rounded-xs bg-gray-200" />
              <Skeleton className="w-5 h-4 rounded-xs bg-gray-200" />
              <Skeleton className="w-6 h-4 rounded-xs bg-gray-200" />
              <Skeleton className="w-6 h-4 rounded-xs bg-gray-200" />
            </Skeleton>
            <Skeleton className="h-4 mb-1 w-[80%] bg-gray-200" />
          </Skeleton>
        </Skeleton>
      ))}
    </div>
  );
};

export default Loading;
