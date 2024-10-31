"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AddColorHeader() {
  const [isXButtonPushed, setIsXButtonPushed] = useState(false);

  return (
    <div className="text-[3.2rem] lg:text-[4rem] font-bold flex gap-[71px] lg:gap-[108px] items-center">
      <h1>새 컬러 등록하기</h1>
      <Link href="/">
        <div
          className="p-[12px] bg-[#F5F7FB] rounded-[24px] cursor-pointer hover:bg-[#EDF0F5]"
          style={{ backgroundColor: isXButtonPushed ? "#DEE4EE" : "" }}
          onMouseDown={() => setIsXButtonPushed(true)}
          onMouseLeave={() => setIsXButtonPushed(false)}
        >
          <Image
            className="w-[24px] h-[24px]"
            src="/x.svg"
            width={0}
            height={0}
            sizes="100vw"
            alt="취소버튼"
          />
        </div>
      </Link>
    </div>
  );
}
