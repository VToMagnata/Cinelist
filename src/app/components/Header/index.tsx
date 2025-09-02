import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[5em] pr-[2em] pl-[2em] w-full flex justify-between items-center bg-[#1f1f1f]">
      <Link href={"/"} className="text-[2em] text-red-500 font-bold">
        Cinelist
      </Link>
      <div className="flex gap-4">
        <Link href={"/"} className="hover:text-red-500">
          Home
        </Link>
        <Link href={"/filmes/em-alta"} className="hover:text-red-500">
          Em alta
        </Link>
      </div>
    </header>
  );
}
