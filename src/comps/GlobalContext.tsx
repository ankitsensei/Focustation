import { createContext, useContext, useState, ReactNode } from "react";

type GlobalContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <GlobalContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext); 
  if (!context) throw new Error("useGlobal must be used within GlobalProvider");
  return context;
};
