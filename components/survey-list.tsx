"use client";

import { useEffect, useState } from "react";
import AddColorButton from "./add-color-button";
import ListItem from "./list-item";
import { getSurveys } from "@/api/api";
import { SurveyItem } from "@/types/types";

export default function SurveyList() {
  const [list, setList] = useState<SurveyItem[]>();

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
      {list?.map((item) => (
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
