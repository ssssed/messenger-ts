import { MessageInputWrapper, MessageWrapper } from "@/components/chat/logic";
import { messages } from "@/utils/static-data";

const Messages = () => {
  return (
    <div className="flex flex-col px-10 pt-2 pb-10 w-full">
      <div className="flex flex-col px-4 gap-6 h-5/6 mb-5 overflow-auto">
        {messages.map((ms) => (
          <MessageWrapper
            key={ms.id}
            author={ms.author}
            time={ms.time}
            message={ms.message}
          />
        ))}
      </div>
      <MessageInputWrapper />
    </div>
  );
};

export default Messages;
