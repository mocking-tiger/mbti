import AddColorHeader from "@/components/add-color-header";
import AddColorBody from "@/components/add-color-body";

export default function AddColor() {
  return (
    <main className="w-fit mx-auto mt-[80px] flex flex-col gap-[56px] text-[#464E5E]">
      <div>
        <AddColorHeader />
      </div>
      <div>
        <AddColorBody />
      </div>
    </main>
  );
}
