'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { memo, useCallback } from 'react';

const Header = memo(() => {
  const session = useSession();

  const handleSignOut = useCallback(() => signOut({ callbackUrl: '/' }), []);

  return (
    <header
      className='sticky top-0 h-14 px-6 flex flex-row items-center
    border-b border-solid
    border-[#CDD5DE]
    bg-[#ffffff]
    shadow-[rgba(2, 17, 37, 0.04)]'
    >
      <Link href='/'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={159}
          height={56}
        />
      </Link>
      <div className='ml-auto flex items-center flex-row gap-[9.5px]'>
        {session?.data ? (
          <>
            <Link href='/settings'>
              <Image
                src='/setting.svg'
                alt='setting'
                height={24}
                width={24}
              />
            </Link>
            <Link href='/profile'>
              <Image
                src={session.data.user?.image || '/person.png'}
                alt='user image'
                style={{ borderRadius: '50%' }}
                width={32}
                height={32}
              />
            </Link>
            <Link
              href='#'
              onClick={handleSignOut}
            >
              Выйти
            </Link>
          </>
        ) : (
          <Link href='/api/auth/signin'>Войти</Link>
        )}
      </div>
    </header>
  );
});

export default Header;
