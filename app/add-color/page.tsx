import AddColorHeader from "@/components/add-color-header";
import AddColorBody from "@/components/add-color-body";
import ColorSelector from "@/components/color-selector";
import AddColorButton from "@/components/add-color-button";

export default function AddColor() {
  return (
    <main className="w-fit mx-auto mt-[45px] lg:mt-[80px] px-[24px] lg:px-0 flex flex-col gap-[48px] lg:gap-[56px] text-[#464E5E]">
      <div>
        <AddColorHeader />
      </div>
      <div>
        <AddColorBody />
      </div>
      <div>
        <ColorSelector />
      </div>
      <div>
        <AddColorButton />
      </div>
    </main>
  );
}
