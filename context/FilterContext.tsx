"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type FilterContextType = {
  selectedMBTI: string;
  setSelectedMBTI: Dispatch<SetStateAction<string>>;
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  combinedMbti: string[];
  setCombinedMbti: Dispatch<SetStateAction<string[]>>;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedMBTI, setSelectedMBTI] = useState("");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [combinedMbti, setCombinedMbti] = useState<string[]>([]);

  return (
    <FilterContext.Provider
      value={{
        selectedMBTI,
        setSelectedMBTI,
        selectedColor,
        setSelectedColor,
        combinedMbti,
        setCombinedMbti,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("context가 undefilned임");
  }
  return context;
};
