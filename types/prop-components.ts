import { ChangeEvent, FormEvent, ReactNode } from "react";

export interface IMessageInputProps {
  messageText: string;
  onMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelectFile: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface IMessageProps {
  children: ReactNode;
  className: string;
}

export interface IMessageWrapperProps {
  time: string;
  id?: number;
  author: string;
  message: string;
}
