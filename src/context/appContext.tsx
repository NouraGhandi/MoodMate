import React, { createContext, ReactNode, useContext, useState } from "react";
import { ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";
interface Prop {
  children: ReactNode;
}
interface IMood {
  mood: string;
  source: ImageSourcePropType;
  date: Date;
  feeling: string;
}
const initialValues: IMood = {
  mood: "Good",
  source: require("../../assets/images/good.png"),
  date: new Date(),
  feeling: "",
};

interface AppContextProps {
  mood: IMood;
  setMood: (key: keyof IMood, value: string | Date) => void;
  reset: () => void;
  submitToList: () => void;
  moodList: IMood[];
}
const AppContext = createContext<AppContextProps>({
  mood: initialValues,
  setMood: () => {},
  reset: () => {},
  submitToList: () => {},
  moodList: [],
});

const AppProvider = ({ children }: Prop) => {
  const { navigate } = useNavigation();
  const [mood, setMood] = useState<IMood>(initialValues);

  const [moodList, setMoodList] = useState<IMood[]>([]);

  const updateContext = (key: keyof IMood, value: string | Date) => {
    setMood((currentMood) => ({ ...currentMood, [key]: value }));
  };

  const submitToList = async () => {
    const newMood = {
      ...mood,
    };

    setMoodList((prev) => [...prev, newMood]);

    navigate("Home" as never);
  };

  const reset = () => {
    setMood(initialValues);
  };

  return (
    <AppContext.Provider
      value={{
        mood: mood,
        setMood: updateContext,
        reset,
        submitToList,
        moodList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
