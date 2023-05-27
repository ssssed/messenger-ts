import { Message } from "@/components/chat/ui";

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
];

const Messages = () => {
  return (
    <div className="flex flex-col px-20 py-2">
      {messages.map((ms) => (
        <Message key={ms.id} />
      ))}
    </div>
  );
};

export default Messages;
