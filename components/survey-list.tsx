"use client";

import { useEffect, useState } from "react";
import AddColorButton from "./add-color-button";
import ListItem from "./list-item";
import { getSurveys } from "@/api/api";
import { SurveyItem } from "@/types/types";
import { useFilterContext } from "@/context/FilterContext";

export default function SurveyList() {
  const [list, setList] = useState<SurveyItem[]>();
  const [hasNext, setHasNext] = useState(false);
  const [limit, setLimit] = useState(20);
  const { selectedMBTI } = useFilterContext();

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
      <AddColorButton />
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
