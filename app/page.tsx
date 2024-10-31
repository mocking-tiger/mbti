import Header from "@/components/header";
import SurveyList from "@/components/survey-list";

export default function Home() {
  return (
    <main className="w-full lg:w-[919px] mx-auto mt-[24px] lg:mt-[80px] text-[1.6rem] flex flex-col lg:flex-row gap-[16px] lg:gap-[40px]">
      <header className="px-[26px] lg:px-0 w-full lg:w-[297.55px]">
        <Header />
      </header>
      <section className="w-full lg:w-[528px] px-[26px] lg:px-0">
        <SurveyList />
      </section>
    </main>
  );
}
