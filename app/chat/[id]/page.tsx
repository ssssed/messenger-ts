import { Dialogs, Messages } from "@/components/chat/ui";

type Params = {
  params: {
    id: number;
  };
};

const ChatPage = ({ params: { id } }: Params) => {
  console.log(id);

  return (
    <main className="flex flex-row h-[calc(100vh-56px)]">
      <Dialogs />
      <Messages />
    </main>
  );
};

export default ChatPage;
