"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function HeaderLink({ text, path }) {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`duration-300 py-2 ${
        path == pathname ? "text-[#CDAA7D] " : "" 
      } ${path == "/" ? "block" : " hidden laptop:block"}`}
    >
      {path == "/" ? (
        <FontAwesomeIcon className=" text-4xl w-10" icon={faHouse} />
      ) : (
        <div> {text} </div>
      )}
      {path == pathname ? (
        <motion.div
          className="border-b-[2px] border-[#CDAA7D]"
          transition={{ type: "spring", bounce: 0.2 }}
          layoutId="link"
        ></motion.div>
      ) : (
        ""
      )}
    </Link>
  );
}
