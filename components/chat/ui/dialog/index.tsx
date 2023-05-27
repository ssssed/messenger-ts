import Image from "next/image";

const Dialog = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Image src="/person.png" alt="person" width={40} height={40} />
      <div className="flex flex-row">
        <div className="flex flex-col items-center gap-[6px]">
          <h4 className="leading-5 text-sm text-[#0E1114] text-left w-full">
            Zack Fox
          </h4>
          <p
            className="text-ellipsis leading-5 text-sm
          overflow-hidden whitespace-nowrap
          max-w-[175px] text-[#616C76]"
          >
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
        <div className="flex flex-col ml-auto items-center gap-[6px]">
          <span className="text-right text-xs text-[#8FA0AF] whitespace-nowrap">
            10:10 AM
          </span>
          <div className="text-right text-xs text-white bg-[#0086EA] rounded-full w-5 h-5 flex justify-center items-center ml-auto">
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
