"use client";

import { useEffect, useState } from "react";
import { getSurveys } from "@/api/api";
import { SurveyItem } from "@/types/types";
import { useFilterContext } from "@/context/FilterContext";
import GoToAddPage from "./go-to-add-page";
import ListItem from "./list-item";

export default function SurveyList() {
  const { selectedMBTI } = useFilterContext();
  const [list, setList] = useState<SurveyItem[]>();
  const [limit, setLimit] = useState(20);
  const [hasNext, setHasNext] = useState(false);

  const getList = async () => {
    const listData = await getSurveys(limit);
    setList(listData.results);
    if (listData.next) {
      setHasNext(true);
    } else {
      setHasNext(false);
    }
  };

  function ttt() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      hasNext
    ) {
      setLimit((prev) => prev + 20);
    }
  }

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  useEffect(() => {
    window.addEventListener("scroll", ttt);

    return () => {
      window.removeEventListener("scroll", ttt);
    };
  });

  return (
    <div>
      <GoToAddPage />
      {list
        ?.filter((item) => selectedMBTI === "" || item.mbti === selectedMBTI)
        .map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            mbti={item.mbti}
            colorCode={item.colorCode}
          />
        ))}
    </div>
  );
}
