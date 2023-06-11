import { Dialog } from '@/components/chat/ui';
import { IDialogsProps } from '@/types';
import { FC, memo } from 'react';

const Dialogs: FC<IDialogsProps> = ({ dialogs, onSelect }) => {
  return (
    <div
      className='flex
    flex-col gap-4 w-full
    border-r border-solid
    border-[#CDD5DE] 
    shadow-[rgba(2, 17, 37, 0.04)]
    px-6 py-4
    min-h-full min-w-xs max-w-xs overflow-y-auto'
    >
      {dialogs.map(dialog => (
        <Dialog
          key={dialog.id}
          onClick={() => onSelect(dialog)}
          {...dialog}
        />
      ))}
    </div>
  );
};

export default memo(Dialogs);
