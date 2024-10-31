import { mbtiChecker } from "@/utils/mbti-checker";
import { valueProvider } from "@/utils/value-provider";
import { useEffect, useState } from "react";

export default function MbtiBlock({
  value,
  onClick,
  mbti,
}: {
  value: string;
  onClick: () => void;
  mbti: string[];
}) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    mbtiChecker(value, mbti, setIsClicked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mbti]);

  return (
    <div
      className={`px-[22px] lg:px-[41px] py-[12px] lg:py-[14px] flex gap-[16px] lg:gap-[32px] justify-center items-center border rounded-[16px] cursor-pointer ${
        isClicked ? "" : "hover:bg-[#E7EBF2]"
      } ${isClicked ? "bg-[#464E5E]" : "bg-[#fff]"}`}
      onClick={onClick}
    >
      <div className="w-[22px] lg:w-[30px]">
        <span
          className={`text-[#464E5E] text-[3.6rem] lg:text-[4rem] ${
            isClicked ? "text-[#fff]" : ""
          }`}
        >
          {value && value.toUpperCase()}
        </span>
      </div>
      <p className="text-[#8892A6] text-[2rem] lg:text-[2.4rem]">
        {valueProvider(value)}
      </p>
    </div>
  );
}
