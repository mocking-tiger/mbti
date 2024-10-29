"use client";

import { useEffect, useState } from "react";
import AddColorButton from "./add-color-button";
import ListItem from "./list-item";
import { getSurveys } from "@/api/api";
import { SurveyItem } from "@/types/types";
import { useFilterContext } from "@/context/FilterContext";

export default function SurveyList() {
  const [list, setList] = useState<SurveyItem[]>();
  const { selectedMBTI } = useFilterContext();

  const getList = async () => {
    const listData = await getSurveys();
    setList(listData.results);
  };

  useEffect(() => {
    getList();
  }, []);

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
