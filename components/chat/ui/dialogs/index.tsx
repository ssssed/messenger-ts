import { Dialog } from "@/components/chat/ui";

const dialogs = [
  {
    id: 1,
    name: "Zack",
    lastname: "Fox",
    lastmessage:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    time: "10:49 AM",
  },
  {
    id: 2,
    name: "Jeck",
    lastname: "Fox",
    lastmessage:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    time: "10:49 AM",
  },
  {
    id: 3,
    name: "Arthur",
    lastname: "Fox",
    lastmessage:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    time: "10:49 AM",
  },
  {
    id: 4,
    name: "Regina",
    lastname: "Fox",
    lastmessage:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    time: "10:49 AM",
  },
  {
    id: 5,
    name: "Caesar",
    lastname: "Fox",
    lastmessage:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    time: "10:49 AM",
  },
];

const Dialogs = () => {
  return (
    <div
      className="flex
    flex-col gap-4 w-80
    border-r border-solid
    border-[#CDD5DE] 
    shadow-[rgba(2, 17, 37, 0.04)]
    px-6 py-4
    min-h-full"
    >
      {dialogs.map((dialog) => (
        <Dialog key={dialog.id} />
      ))}
    </div>
  );
};

export default Dialogs;
