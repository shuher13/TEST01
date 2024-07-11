"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AsideLink({ text, path }) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={`delay-500 duration-500 ${
        path == pathname ? "text-[#cdaa7d]" : ""
      }`}
    >
      <div className="p-2">{text}</div>
      <div
        className={`duration-500 border-b-[1px] border-[#cdaa7d] ${
          path == pathname ? "translate-x-0 delay-500" : "translate-x-[100vw]"
        }`}
      />
    </Link>
  );
}
