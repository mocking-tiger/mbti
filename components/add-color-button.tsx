"use client";

import { sendSurvey } from "@/api/api";
import { useFilterContext } from "@/context/FilterContext";
import { useRouter } from "next/navigation";

export default function AddColorButton() {
  const { combinedMbti, setCombinedMbti, selectedColor, setSelectedColor } =
    useFilterContext();
  const router = useRouter();

  async function handleSubmitSurvey() {
    const response = await sendSurvey(combinedMbti.join(""), selectedColor);
    if (response) {
      alert("참여해 주셔서 감사합니다!");
      router.push("/");
      setCombinedMbti([]);
      setSelectedColor("#000000");
    }
  }

  return (
    <button
      className="w-full py-[22px] bg-[#464e5e] rounded-[16px] text-white text-[2.4rem] font-bold"
      onClick={handleSubmitSurvey}
    >
      컬러 등록
    </button>
  );
}
