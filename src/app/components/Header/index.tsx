import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-[5em] bg-black flex justify-between items-center pr-[3.5em] pl-[3.5em]">
      <h1 className="text-white text-3xl">
        Cine <span className="text-red-500">List</span>{" "}
      </h1>
      <span className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/Filmes/em-alta">Em alta</Link>
      </span>
    </header>
  );
};

export default Header;
