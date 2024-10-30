"use client";

import { useEffect, useState } from "react";
import MbtiBlock from "./mbti-block";

export default function AddColorBody() {
  const [combinedMbti, setCombinedMbti] = useState<string[]>([]);

  function mbtiCombiner(value: string, index: number) {
    const tempArray = [...combinedMbti];
    tempArray[index] = value.toUpperCase();
    setCombinedMbti(tempArray);
  }

  useEffect(() => {
    console.log(combinedMbti.join(""));
  }, [combinedMbti]);

  return (
    <div>
      <h2 className="mb-[24px] text-[2.4rem]">MBTI</h2>
      <div className="grid grid-cols-2 gap-[16px]">
        <MbtiBlock
          value="e"
          onClick={() => mbtiCombiner("e", 0)}
          mbti={combinedMbti}
        />
        <MbtiBlock
          value="i"
          onClick={() => mbtiCombiner("i", 0)}
          mbti={combinedMbti}
        />
        <MbtiBlock
          value="s"
          onClick={() => mbtiCombiner("s", 1)}
          mbti={combinedMbti}
        />
        <MbtiBlock
          value="n"
          onClick={() => mbtiCombiner("n", 1)}
          mbti={combinedMbti}
        />
        <MbtiBlock
          value="t"
          onClick={() => mbtiCombiner("t", 2)}
          mbti={combinedMbti}
        />
        <MbtiBlock
          value="f"
          onClick={() => mbtiCombiner("f", 2)}
          mbti={combinedMbti}
        />
        <MbtiBlock
          value="j"
          onClick={() => mbtiCombiner("j", 3)}
          mbti={combinedMbti}
        />
        <MbtiBlock
          value="p"
          onClick={() => mbtiCombiner("p", 3)}
          mbti={combinedMbti}
        />
      </div>
    </div>
  );
}
