import { dialogs } from '@/utils/static-data';
import { ChangeEvent, FormEvent, ReactNode, SetStateAction } from "react";
import { IFetchDialogs } from "./models";

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

export interface IDialogsProps {
  dialogs: IFetchDialogs[]
  onSelect: (dialog: IFetchDialogs) => void;
}

export interface IChatWrapper {
  dialogs: IFetchDialogs[];
}

export interface IDialogProps extends IFetchDialogs {
  onClick: () => void;
}

export interface IMessagesProps {
  selectedChat: IFetchDialogs
}

export interface IMessageInputWrapperProps {
  onAddMessage: (message: IMessageWrapperProps) => void;
}