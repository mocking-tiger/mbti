"use client";

import AddColorHeader from "@/components/add-color-header";

export default function AddColor() {
  return (
    <main className="w-fit mx-auto mt-[80px] flex flex-col gap-[56px] text-[#464E5E]">
      <div>
        <AddColorHeader />
      </div>
      <div>
        <h2 className="text-[2.4rem]">MBTI</h2>
        <div></div>
      </div>
    </main>
  );
}
