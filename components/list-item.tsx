"use client";

import { useFilterContext } from "@/context/FilterContext";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ListItem({
  id,
  mbti,
  colorCode,
}: {
  id: number;
  mbti: string;
  colorCode: string;
}) {
  const { setSelectedMBTI } = useFilterContext();
  const [width, setWidth] = useState(window.innerWidth);

  function handleScreenSize() {
    const currentWidth = window.innerWidth;
    setWidth(currentWidth);
  }

  useEffect(() => {
    addEventListener("resize", handleScreenSize);

    return () => {
      removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return (
    <div
      className="h-[78px] py-[16px] px-0 sm:px-[16px] lg:px-[48px] flex items-center hover:bg-[#F5F7FB] rounded-[8px] text-[#BFC8DA] text-[1.6rem] lg:text-[2.5rem]"
      onClick={() => setSelectedMBTI(mbti)}
    >
      <h3 className="w-fit lg:min-w-[32px] mr-[16px] lg:mr-[41px]">{id}</h3>
      <h3 className="w-[55px] lg:min-w-[77.16px] mr-[16px] p-[8px] text-center text-[#464e5e] font-semibold bg-[rgba(178,189,204,0.20)] rounded-[8px]">
        {mbti}
      </h3>
      <Image
        className="min-w-[30px] xs:w-full lg:w-[72px] mr-[16px]"
        src={
          width > 1023
            ? "/Line1.svg"
            : width > 808
            ? "Line2.svg"
            : width > 550
            ? "Line3.svg"
            : width > 400
            ? "Line4.svg"
            : "Line1.svg"
        }
        width={0}
        height={0}
        sizes="100vw"
        alt="화살표"
      />
      <div
        className="min-w-[40px] min-h-[40px] mr-[15px] bg-[#9441ff] rounded-[8px] border-[3px] border-[#e8e8e8]"
        style={{ backgroundColor: colorCode }}
      />
      <h3 className="min-w-[72px] text-[1.6rem] lg:text-[2.4rem]">
        {colorCode}
      </h3>
    </div>
  );
}
