import { createContext, useState } from "react";

export const CreateChatContext = createContext();

export const CreateChatProvider = ({ children }) => {
  const [isChatVisible, setIsChatVisible] = useState(window.innerWidth < 768);

  function toggleChat() {
    setIsChatVisible(true);
  }

  return (
    <CreateChatContext.Provider value={{ isChatVisible, toggleChat }}>
      {children}
    </CreateChatContext.Provider>
  );
};
