"use client";

import React from "react";
import ChatHeader from "../chatHeader";

interface ChatClientProps {
  companion: {
    message: unknown; // TODO: type 지정
    _count: {
      messages: number;
    };
  }; // TODO: type 지정
}

// TODO: any 타입 제거
const ChatClient = ({ companion }: any) => {
  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion} />
    </div>
  );
};

export default ChatClient;
