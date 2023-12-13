import Image from "next/image";

function Header() {
  return (
    <div className="flex outline  justify-between outline-offset-2 outline-1 px-10 py-4">
      <Image
        src="/images/fb-logo.png"
        width={140}
        height={60}
        alt="Youtube Logo"
      />

      <div>Sandeep Kumar </div>
    </div>
  );
}

export default Header;
