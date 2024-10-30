"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AddColorHeader() {
  const [isXButtonPushed, setIsXButtonPushed] = useState(false);

  return (
    <div className="text-[4rem] font-bold flex gap-[108px] items-center">
      <h1>새 컬러 등록하기</h1>
      <Link href="/">
        <div
          className="p-[12px] bg-[#F5F7FB] rounded-[24px] cursor-pointer hover:bg-[#EDF0F5]"
          style={{ backgroundColor: isXButtonPushed ? "#DEE4EE" : "" }}
          onMouseDown={() => setIsXButtonPushed(true)}
          onMouseLeave={() => setIsXButtonPushed(false)}
        >
          <Image
            src="/x.svg"
            width={24}
            height={24}
            style={{ width: "auto", height: "auto" }}
            alt="취소버튼"
          />
        </div>
      </Link>
    </div>
  );
}
