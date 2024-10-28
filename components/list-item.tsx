import Image from "next/image";

export default function ListItem() {
  return (
    <div className="h-[78px] py-[16px] px-[48px] flex items-center hover:bg-[#F5F7FB] rounded-[8px] text-[#BFC8DA] text-[2.5rem]">
      <h3 className="mr-[41px]">1326</h3>
      <h3 className="mr-[16px] p-[8px] text-[#464e5e] font-semibold bg-[rgba(178,189,204,0.20)] rounded-[8px]">
        ENTJ
      </h3>
      <Image
        className="mr-[16px]"
        src="/Line1.svg"
        width={72}
        height={0}
        alt="화살표"
      />
      <div className="w-[40px] h-[40px] mr-[15px] bg-[#9441ff] rounded-[8px] border-[3px] border-[#e8e8e8]" />
      <h3 className="text-[2.4rem]">#944144</h3>
    </div>
  );
}
