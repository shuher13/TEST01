import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col container m-auto border-[#555555]">
      <div className=" py-20 flex justify-between border-b-[1px] border-t-[1px]">
        <FontAwesomeIcon className="hidden tablet:block text-6xl" icon={faHouse} />
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl font-bold">Контакты</h4>
          <ol className="flex flex-col gap-1">
            <li>+7 (912) 819-11-90</li>
            <li>+7 (978) 164-85-74</li>
            <li>Черноморское село, Новосельское, восточная, 93</li>
          </ol>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl font-bold">Время Заезда-Выезда</h4>
          <ol className="flex flex-col gap-1">
            <li>Будни: 00:00-00:00</li>
            <li>Выходные: 00:00-00:00</li>
          </ol>
        </div>
        {/* <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold">Мы в инстаграмм</div>
          <Link href="">
            <FontAwesomeIcon
              className="text-slate-700 w-8"
              icon={faInstagram}
            />
          </Link>
        </div> */}
      </div>
      <div className="py-8 text-center text-[#aaaaaa]">
        Copyright © 2023 - 2024
      </div>
    </footer>
  );
}
