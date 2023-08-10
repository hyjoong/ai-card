import { Avatar } from "@/components/common/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

interface BotAvatarProps {
  src: string;
}
const BotAvatar = ({ src }: BotAvatarProps) => {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={src} />
    </Avatar>
  );
};

export default BotAvatar;
