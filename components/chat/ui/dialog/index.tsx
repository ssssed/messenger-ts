import { IDialogProps } from '@/types';
import Image from 'next/image';
import { FC, memo } from 'react';

const Dialog: FC<IDialogProps> = ({
  image,
  name,
  lastmessage,
  lastname,
  time,
  count,
  onClick,
}) => {
  return (
    <div
      className='flex flex-row items-center gap-2 cursor-pointer w-[270px]'
      onClick={onClick}
    >
      <Image
        className='w-10 h-10 rounded-full'
        src={image}
        alt={name + ' ' + lastname}
        loading='lazy'
        width={40}
        height={40}
      />
      <div className='flex flex-row'>
        <div className='flex flex-col items-center gap-[6px]'>
          <h4 className='leading-5 text-sm text-[#0E1114] text-left w-full'>
            {`${name} ${lastname}`}
          </h4>
          <p
            className='text-ellipsis leading-5 text-sm
          overflow-hidden whitespace-nowrap
          max-w-[175px] text-[#616C76]'
          >
            {lastmessage}
          </p>
        </div>
        <div className='flex flex-col ml-auto items-center gap-[6px] w-[46px]'>
          <span className='text-right text-xs text-[#8FA0AF] whitespace-nowrap'>
            {time}
          </span>
          {count > 0 && (
            <div className='text-right text-xs text-white bg-[#0086EA] rounded-full w-5 h-5 flex justify-center items-center ml-auto'>
              {count}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Dialog);
