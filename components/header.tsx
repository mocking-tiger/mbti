import FilterIcon from "./mbti-filter";

export default function Header() {
  return (
    <div className="px-[40px] py-[32px] lg:py-[80px] rounded-[32px] lg:rounded-[80px] bg-[#f5f7fb] leading-[30px] lg:leading-[45px] lg:fixed">
      <h1 className="text-[#464E5E] text-[2.4rem] lg:text-[4rem] text-center lg:text-right">
        MBTI별
        <br />
        <span className="-mt-[10px] font-bold">좋아하는 컬러</span>
        <FilterIcon />
      </h1>
    </div>
  );
}
