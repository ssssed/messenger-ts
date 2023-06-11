'use client';
import { Message } from '@/components/chat/ui';
import { IMessageWrapperProps } from '@/types';
import { FC } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const MessageWrapper: FC<IMessageWrapperProps> = ({
  message,
  time,
  author,
}) => {
  const session = useSession();
  if (author !== session.data?.user?.name!)
    return (
      <Message className='flex flex-row gap-6'>
        <Image
          src='/person.png'
          className='w-10 h-10 mt-auto'
          alt='person'
          width={40}
          height={40}
        />
        <div className='flex flex-col gap-[2px]'>
          <h4 className='text-[#1D9745] text-base'>{author}</h4>
          <p className='p-4 text-base text-[#0E1114] rounded-2xl rounded-bl-none bg-[#EEF1F4]'>
            {message}
          </p>
          <span className='text-[#616C76] text-xs'>{time}</span>
        </div>
      </Message>
    );
  return (
    <Message className='flex flex-col gap-[2px]'>
      <p className='ml-auto p-4 bg-[#E8F2FE] rounded-2xl rounded-rb-none'>
        {message}
      </p>
      <span className='text-[#616C76] text-xs text-right'>{time}</span>
    </Message>
  );
};

export default MessageWrapper;
