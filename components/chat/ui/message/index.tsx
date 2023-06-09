import { IMessageProps } from "@/types";
import { FC } from "react";

const Message: FC<IMessageProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Message;
