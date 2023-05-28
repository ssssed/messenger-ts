import { ChangeEvent, FormEvent } from "react";

export interface IMessageInputProps {
  messageText: string;
  onMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelectFile: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
