'use client';
import { useDateFormat } from '@/hook';
import { IFetchFeed } from '@/types';
import Image from 'next/image';
import { FC } from 'react';

const Feed: FC<IFetchFeed> = ({
  group_name,
  group_image,
  text,
  post_image,
  time,
}) => {
  const formattedDate = useDateFormat(time);
  return (
    <div className='flex flex-col'>
      <div className='flex flex-ro gap-3 items-center'>
        <Image
          src={group_image}
          alt={group_name}
          className='rounded-full'
          width={40}
          height={40}
        />
        <div className='flex flex-col gap-[2px] justify-start'>
          <p className='text-sm'>{group_name}</p>
          <p className='text-sm text-[#737373]'>{formattedDate}</p>
        </div>
      </div>
      <p>{text}</p>
      <Image
        src={post_image}
        alt='post'
        width={510}
        height={510}
      />
    </div>
  );
};

export default Feed;
