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
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedMBTI, setSelectedMBTI] = useState("");

  return (
    <FilterContext.Provider value={{ selectedMBTI, setSelectedMBTI }}>
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
