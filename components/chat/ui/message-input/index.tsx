import Image from "next/image";

const MessageInput = () => {
  return (
    <form className="flex flex-col mt-auto mx-auto border border-solid border-[#CDD5DE] rounded-2xl overflow-hidden w-[520px]">
      <input
        className="py-3 px-2 focus:outline-none"
        placeholder="Write message"
      />
      <div className="flex flex-row items-center py-3 px-2 bg-[#F8F9FA] border-t border-solid border-[#CDD5DE]">
        <Image src="/setting.svg" alt="setting" width={20} height={20} />
        <button
          className="ml-auto px-3 py-2 text-[#9E9E9E] rounded-lg border border-solid border-[#D4D4D4] text-xs font-semibold"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
