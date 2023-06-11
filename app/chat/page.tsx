import { Dialogs, Messages } from '@/components/chat/ui';

const ChatPage = () => {
  return (
    <main className='flex flex-row h-[calc(100vh-56px)]'>
      <Dialogs />
      <Messages />
    </main>
  );
};

export default ChatPage;
