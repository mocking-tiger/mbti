import Link from "next/link";

export default function GoToAddPage() {
  return (
    <Link href="/add-color">
      <button className="w-full py-[20px] lg:py-[24px] pl-[24px] lg:pl-[48px] border-2 border-dashed border-[#DEE3EC] text-left hover:bg-[#F5F7FB] rounded-[8px] text-[1.6rem] lg:text-[2.4rem] text-[#464E5E]">
        + 새 컬러 등록하기
      </button>
    </Link>
  );
}
