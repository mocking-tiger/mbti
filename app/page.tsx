import Header from "@/components/header";
import SurveyList from "@/components/survey-list";

export default function Home() {
  return (
    <main className="max-w-[919px] mx-auto mt-[80px] text-[1.6rem] flex gap-[40px]">
      <header className="w-[297.55px]">
        <Header />
      </header>
      <section className="w-[528px]">
        <SurveyList />
      </section>
    </main>
  );
}
