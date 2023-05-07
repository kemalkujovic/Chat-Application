import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [name, setName] = useState("");

  function toggleSettings() {
    setIsSettingsVisible(!isSettingsVisible);
  }

  return (
    <SettingsContext.Provider
      value={{ isSettingsVisible, toggleSettings, setName, name }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
