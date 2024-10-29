"use client";

import { useFilterContext } from "@/context/FilterContext";
import Image from "next/image";

export default function FilterIcon() {
  const { selectedMBTI, setSelectedMBTI } = useFilterContext();

  return (
    <div
      className={`w-fit mx-auto rounded-[8px] bg-white text-[3.2rem] flex gap-[24px] cursor-pointer ${
        selectedMBTI && "mt-[32px] py-[8px] px-[24px]"
      }`}
      onClick={() => setSelectedMBTI("")}
    >
      {selectedMBTI && (
        <>
          {selectedMBTI}
          <Image
            src="/Vector.svg"
            width={12}
            height={12}
            style={{ width: "auto", height: "auto" }}
            alt="닫기 아이콘"
          />
        </>
      )}
    </div>
  );
}
