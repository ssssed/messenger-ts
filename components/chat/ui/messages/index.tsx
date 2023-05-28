import { Message, MessageInput } from "@/components/chat/ui";

const messages = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    name: "Caesar",
    time: "4:38 AM",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    name: "Caesar",
    time: "4:39 AM",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    name: "Caesar",
    time: "4:40 AM",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    name: "Caesar",
    time: "4:38 AM",
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    name: "Caesar",
    time: "4:39 AM",
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    name: "Caesar",
    time: "4:40 AM",
  },
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    name: "Caesar",
    time: "4:38 AM",
  },
  {
    id: 8,
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    name: "Caesar",
    time: "4:39 AM",
  },
  {
    id: 9,
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    name: "Caesar",
    time: "4:40 AM",
  },
];

const Messages = () => {
  return (
    <div className="flex flex-col px-20 pt-2 pb-10 w-full">
      <div className="flex flex-col gap-6 h-5/6 mb-5 overflow-auto">
        {messages.map((ms) => (
          <Message key={ms.id} />
        ))}
      </div>
      <MessageInput />
    </div>
  );
};

export default Messages;
