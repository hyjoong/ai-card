"use client";
import { Button } from "@/components/common/button";
import { ChevronLeft, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import BotAvatar from "../botAvatar";

interface ChatHeaderProps {
  companion: {
    message: unknown; // TODO: type 지정
    _count: {
      messages: number;
    };
    src?: string; // TPDP: 임시 type 제거예정
  };
}

const ChatHeader = ({ companion }: ChatHeaderProps) => {
  const router = useRouter();
  return (
    <div className="flex w-full justify-between items-center border-b border-pri/10 pb-4">
      <div className="flex gap-x-2 items-center">
        <Button onClick={() => router.back()} size="icon" variant="ghost">
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <BotAvatar src={companion?.src ?? ""} />
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-2">
            <p className="font-bold">{/* {companion.name} */}</p>
            <div className="flex items-center text-xs text-muted-foreground"></div>
            <MessageSquare className="w-3 h-3 mr-1" />
            {companion._count?.messages}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
