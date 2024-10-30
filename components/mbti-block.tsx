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
      className={`px-[41px] py-[14px] flex gap-[32px] items-center border rounded-[16px] cursor-pointer ${
        isClicked ? "" : "hover:bg-[#E7EBF2]"
      } ${isClicked ? "bg-[#464E5E]" : "bg-[#fff]"}`}
      onClick={onClick}
    >
      <div className="w-[30px] text-center">
        <span
          className="text-[#464E5E] text-[4rem]"
          style={{ color: isClicked ? "#fff" : "" }}
        >
          {value && value.toUpperCase()}
        </span>
      </div>
      <p className="text-[#8892A6] text-[2.4rem]">{valueProvider(value)}</p>
    </div>
  );
}
