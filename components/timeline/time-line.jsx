import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const TimeLine = ({ timeline }) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border-2 border-secondary">
      <div className="relative flex w-max space-x-4 p-4">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`shrink-0 md:min-w-[300px] min-w-[150px] flex justify-center bg-secondary p-8 rounded-md shadow-md ${
              index % 2 === 0 ? "mt-40" : "mb-40"
            }`}
          >
            <div className="space-y-2">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-sm text-white text-center">{item.date}</p>
            </div>
          </div>
        ))}
        <div className="absolute w-full h-[8px] lg:h-[10px] bg-primary rounded-[8px] lg:rounded-[20px] top-0 bottom-0 left-0 right-0 m-auto"></div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default TimeLine;
