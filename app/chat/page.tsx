import ChatWrapper from '@/components/chat/logic/chat-wrapper';

export default async function ChatPage() {
  return (
    <main className='flex flex-row h-[calc(100vh-56px)]'>
      <ChatWrapper />
    </main>
  );
}
