import React, { createContext, ReactNode, useContext, useState } from "react";

interface Prop {
  children: ReactNode;
}

interface IUserMood {
  mood: string;
  source: string;
  date: Date;
  emotion: string;
}

const initialUserMood: IUserMood = {
  mood: "",
  source: "",
  date: new Date(),
  emotion: "",
};
interface AppContextProps {
  userMood: IUserMood;
  setUserMood: (key: keyof IUserMood, value: any) => void;
}
const AppContext = createContext<AppContextProps>({
  userMood: initialUserMood,
  setUserMood: () => {},
});

const AppProvider = ({ children }: Prop) => {
  const [userMood, setUserMood] = useState<IUserMood>(initialUserMood);
  const updateContext = (key: keyof IUserMood, value: any) => {
    setUserMood((currentMood) => ({ ...currentMood, [key]: value }));
  };
  return (
    <AppContext.Provider
      value={{ userMood: userMood, setUserMood: updateContext }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the context
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
