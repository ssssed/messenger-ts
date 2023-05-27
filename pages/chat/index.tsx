import { Dialogs } from "@/components/chat/ui";

const Chat = () => {
  return (
    <main className="flex flex-row h-[calc(100vh-56px)]">
      <Dialogs />
      <div className="flex flex-col">Content</div>
    </main>
  );
};

export default Chat;
