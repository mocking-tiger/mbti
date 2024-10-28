import Link from "next/link";

export default function AddColorButton() {
  return (
    <Link href="/add-color">
      <button className="w-full py-[24px] pl-[48px] border-2 border-dashed border-[#DEE3EC] text-left">
        + 새 컬러 등록하기
      </button>
    </Link>
  );
}
