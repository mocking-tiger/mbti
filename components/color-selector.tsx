"use client";

import { useFilterContext } from "@/context/FilterContext";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ColorSelector() {
  const { selectedColor, setSelectedColor } = useFilterContext();
  const [buttonColor, setButtonColor] = useState("#f5f7fb");

  function randomColorGenerator() {
    const randomColor =
      "#" +
      ((Math.random() * 0xffffff) << 0)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase();
    setSelectedColor(randomColor);
  }

  function validHexCodeChecker(value: string) {
    const isValidHex = /^#[0-9A-F]{6}$/i.test(value); // 정규식으로 유효성 체크
    if (!isValidHex) {
      setSelectedColor("#000000");
    }
  }

  return (
    <div>
      <div className="w-full mb-[24px] flex gap-[8px] items-center">
        <h2 className="text-[#464E5E] text-[2.4rem]">컬러</h2>
        <div
          className="p-[8px] rounded-[8px] cursor-pointer"
          style={{ backgroundColor: buttonColor }}
          onClick={() => randomColorGenerator()}
          onMouseDown={() => setButtonColor("#DEE4EE")}
          onMouseUp={() => setButtonColor("#f5f7fb")}
          onMouseLeave={() => setButtonColor("#f5f7fb")}
          onMouseEnter={() => setButtonColor("#EDF0F5")}
        >
          <Image
            src="/repeat.svg"
            width={16}
            height={16}
            style={{ width: "auto", height: "auto" }}
            alt="랜덤생성 버튼"
          />
        </div>
        <Link
          className="float-right text-[1.6rem] text-[#268fb6] hover:underline"
          href={"https://htmlcolorcodes.com/"}
          target="_blank"
        >
          색상 코드 찾아보기
        </Link>
      </div>
      <div className="flex justify-between relative">
        <input
          value={selectedColor.toUpperCase()}
          className="w-full px-[32px] py-[26px] border-2 border-[#E7EBF2] rounded-[16px] text-[#8892A6] text-[2.4rem] focus:outline-[#464E5E]"
          onChange={(e) => setSelectedColor(e.target.value)}
          onBlur={() => validHexCodeChecker(selectedColor)}
        />
        <div
          className="w-[40px] h-[40px] rounded-[8px] absolute right-[32px] top-[26px]"
          style={{ backgroundColor: selectedColor }}
        />
      </div>
    </div>
  );
}
