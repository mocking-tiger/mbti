"use client";

import { useFilterContext } from "@/context/FilterContext";
import MbtiBlock from "./mbti-block";

export default function AddColorBody() {
  const { combinedMbti, setCombinedMbti } = useFilterContext();
  const MBTI_VALUES = [
    { value: "e", group: 0 },
    { value: "i", group: 0 },
    { value: "s", group: 1 },
    { value: "n", group: 1 },
    { value: "t", group: 2 },
    { value: "f", group: 2 },
    { value: "j", group: 3 },
    { value: "p", group: 3 },
  ];

  function mbtiCombiner(value: string, index: number) {
    const tempArray = [...combinedMbti];
    tempArray[index] = value.toUpperCase();
    setCombinedMbti(tempArray);
  }

  return (
    <div>
      <h2 className="mb-[24px] text-[2.4rem]">MBTI</h2>
      <div className="grid grid-cols-2 gap-[16px]">
        {MBTI_VALUES.map((item, index) => (
          <MbtiBlock
            key={index}
            value={item.value}
            onClick={() => mbtiCombiner(item.value, item.group)}
            mbti={combinedMbti}
          />
        ))}
      </div>
    </div>
  );
}
