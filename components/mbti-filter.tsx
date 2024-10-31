"use client";

import { useFilterContext } from "@/context/FilterContext";
import Image from "next/image";

export default function FilterIcon() {
  const { selectedMBTI, setSelectedMBTI } = useFilterContext();

  return (
    <div
      className={`w-fit mx-auto rounded-[8px] bg-white text-[1.6rem] lg:text-[3.2rem] flex gap-[8px] lg:gap-[24px] items-center cursor-pointer ${
        selectedMBTI &&
        "mt-[16px] lg:mt-[32px] py-[4px] lg:py-[8px] px-[8px] lg:px-[24px]"
      }`}
      onClick={() => setSelectedMBTI("")}
    >
      {selectedMBTI && (
        <>
          {selectedMBTI}
          <Image
            className="w-[6px] lg:w-[12px] h-[6px] lg:h-[12px]"
            src="/Vector.svg"
            width={0}
            height={0}
            sizes="100vw"
            alt="닫기 아이콘"
          />
        </>
      )}
    </div>
  );
}
