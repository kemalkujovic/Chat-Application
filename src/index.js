import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./contex/AuthContext";
import { ChatContextProvider } from "./contex/ChatContext";
import { SidebarProvider } from "./contex/SidebarContext";
import { CreateChatProvider } from "./contex/CreateChatContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CreateChatProvider>
    <SidebarProvider>
      <AuthContextProvider>
        <ChatContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ChatContextProvider>
      </AuthContextProvider>
    </SidebarProvider>
  </CreateChatProvider>
);

reportWebVitals();
