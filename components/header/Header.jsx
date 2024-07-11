"use client";

import HeaderLink from "./HeaderLink";
import Link from "next/link";
import { useRef, useState } from "react";
import AsideLink from "./AsideLink";
import { motion } from "framer-motion";

export default function Header() {
  const [openAside, setOpenAside] = useState(false);

  const handleClick = (open) => {
    setOpenAside(open);
  };
  return (
    <>
      <motion.header
        initial={{ translateY: "-100%", translateX: "-50%" }}
        animate={{translateY: "0%", translateX: "-50%"}}
        
        className="container m-auto fixed top-0 left-1/2 -translate-x-1/2 z-40"
      >
        <nav className="flex justify-between items-center border-b-[1px] border-[#555555] tablet:p-8 p-2">
          <HeaderLink text="Отзывы" path="/reviews" />
          <HeaderLink text="Номера" path="/rooms" />
          <HeaderLink text="Главная" path="/" />
          <HeaderLink text="Места Рядом" path="/placesnearby" />
          <HeaderLink text="Контакты" path="/contacts" />
          <div
            className="relative w-8 h-6 laptop:hidden mobile:block cursor-pointer"
            onClick={() => handleClick(true)}
          >
            <div className="w-full absolute -translate-x-1/2 -translate-y-1/2 border-b-2 left-1/2 top-0"></div>
            <div className="w-full absolute -translate-x-1/2 -translate-y-1/2 border-b-2 left-1/4 top-1/2"></div>
            <div className="w-full absolute -translate-x-1/2 -translate-y-1/2 border-b-2 left-1/2 bottom-0"></div>
          </div>
        </nav>
      </motion.header>
      <aside
        className={`duration-1000 ${
          openAside ? "translate-x-0" : "translate-x-full"
        } fixed tablet:w-[50vw] w-full h-screen bg-black z-50 top-0 right-0 laptop:hidden flex flex-col gap-6 items-center justify-center text-4xl`}
      >
        <div
          className="absolute size-16 top-4 left-4 cursor-pointer"
          onClick={() => handleClick(false)}
        >
          <div className="w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-b-2 rotate-45"></div>
          <div className="w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-b-2 -rotate-45"></div>
        </div>
        <AsideLink text="Отзывы" path="/reviews" />
        <AsideLink text="Номера" path="/rooms" />
        <AsideLink text="Места Рядом" path="/placesnearby" />
        <AsideLink text="Контакты" path="/contacts" />
      </aside>
    </>
  );
}
