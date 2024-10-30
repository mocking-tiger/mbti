import { Dispatch, SetStateAction } from "react";

export function mbtiChecker(
  value: string,
  mbti: string[],
  setIsClicked: Dispatch<SetStateAction<boolean>>
) {
  const VALUE = value.toUpperCase();
  if (value === "e" || value === "i") {
    setIsClicked(mbti[0] === VALUE ? true : false);
  } else if (value === "s" || value === "n") {
    setIsClicked(mbti[1] === VALUE ? true : false);
  } else if (value === "t" || value === "f") {
    setIsClicked(mbti[2] === VALUE ? true : false);
  } else if (value === "j" || value === "p") {
    setIsClicked(mbti[3] === VALUE ? true : false);
  }
}
