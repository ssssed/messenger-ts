import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 h-14 px-6 flex flex-row items-center">
      <Image src="/logo.svg" alt="logo" width={159} height={56} />
      <div className="ml-auto flex flex-row gap-[9.5px]">
        <Image src="/setting.svg" alt="setting" height={24} width={24} />
        <Image src="/person.png" alt="user image" width={32} height={32} />
      </div>
    </header>
  );
};

export default Header;
