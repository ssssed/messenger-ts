import Image from "next/image";

const Message = () => {
  return (
    <div className="flex flex-row gap-6">
      <Image
        src="/person.png"
        className="w-10 h-10 mt-auto"
        alt="person"
        width={40}
        height={40}
      />
      <div className="flex flex-col gap-[2px]">
        <h4 className="text-[#1D9745] text-base">Caesar</h4>
        <p className="p-4 text-base text-[#0E1114] rounded-2xl rounded-lb-none bg-[#EEF1F4]">
          Handsome lad like you. There must be some special girl
        </p>
        <span className="text-[#616C76] text-xs">10:10 PM</span>
      </div>
    </div>
  );
};

export default Message;
