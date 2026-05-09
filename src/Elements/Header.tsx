import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-center w-full h-20 bg-amber-500 shadow shadow-amber-50">
      <ul className="flex h-full w-max gap-8 items-center">
        <li className="flex text-xl h-max text-shadow-2xs text-shadow-black underline underline-offset-6">
          <Link href={"/"}>Kayıt Ekle</Link>
        </li>
        <li className="text-xl h-max text-shadow-2xs text-shadow-black underline underline-offset-6">
          <Link href={"/records"}> Kayıtları Gör</Link>
        </li>
      </ul>
    </div>
  );
}
