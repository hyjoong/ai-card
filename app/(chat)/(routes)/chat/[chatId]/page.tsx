import ChatClient from "@/components/domain/chat/client";
import prismadb from "@/lib/prismadb";
import { auth, redirectToSignIn } from "@clerk/nextjs";
// import { redirect } from "next/navigation";
import React from "react";

interface ChatIdPageProps {
  params: { chatId: string };
}

const ChatIdPage = async ({ params }: ChatIdPageProps) => {
  const { userId } = auth();

  if (!userId) return redirectToSignIn();

  // const companion = await prismadb.companion.findUnique({
  const companion = {
    where: { id: params.chatId },
    include: {
      message: {
        orderBy: {
          createdAt: "asc",
        },
        where: {
          userId,
        },
      },
      _count: {
        select: {
          messages: true,
        },
      },
    },
  };

  // if (!companion) return redirect("/");

  return (
    <div>
      <ChatClient companion={companion} />
    </div>
  );
};

export default ChatIdPage;
