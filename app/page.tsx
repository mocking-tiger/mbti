import AddColorButton from "@/components/add-color-button";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="max-w-[919px] mx-auto mt-[80px] text-[1.6rem] flex gap-[40px]">
      <header className="">
        <Header />
      </header>
      <section className="w-[528px]">
        <div>
          <AddColorButton />
        </div>
      </section>
    </main>
  );
}
