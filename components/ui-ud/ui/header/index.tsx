import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="sticky top-0 h-14 px-6 flex flex-row items-center 
    border-t border-b border-solid
    border-[#CDD5DE] 
    shadow-[rgba(2, 17, 37, 0.04)]"
    >
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={159} height={56} />
      </Link>
      <div className="ml-auto flex items-center flex-row gap-[9.5px]">
        <Link href="/settings">
          <Image src="/setting.svg" alt="setting" height={24} width={24} />
        </Link>
        <Link href="/profile">
          <Image src="/person.png" alt="user image" width={32} height={32} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
