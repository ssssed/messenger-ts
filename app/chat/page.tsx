import ChatWrapper from '@/components/chat/logic/chat-wrapper';
import { getDialogs } from '@/services/getDialogs';

async function ChatPage() {
  const { dialogs } = await getDialogs();

  return (
    <main className='flex flex-row h-[calc(100vh-56px)]'>
      <ChatWrapper dialogs={dialogs} />
    </main>
  );
}

export default ChatPage;
