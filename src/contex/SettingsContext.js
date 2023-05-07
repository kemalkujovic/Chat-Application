import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  function toggleSettings() {
    setIsSettingsVisible(!isSettingsVisible);
  }

  return (
    <SettingsContext.Provider value={{ isSettingsVisible, toggleSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
