import FilterIcon from "./mbti-filter";

export default function Header() {
  return (
    <div className="px-[40px] py-[80px] rounded-[80px] bg-[#f5f7fb] leading-[45px]">
      <h1 className="text-[#464E5E] text-[4rem] text-right">
        MBTI별
        <br />
        <span className="-mt-[10px] font-bold">좋아하는 컬러</span>
        <FilterIcon />
      </h1>
    </div>
  );
}
