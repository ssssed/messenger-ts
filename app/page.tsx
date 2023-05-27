import { Dialogs, Messages } from "@/components/chat/ui";

export default function Home() {
  return (
    <main className="flex flex-row h-[calc(100vh-56px)]">
      <Dialogs />
      <Messages />
    </main>
  );
}
