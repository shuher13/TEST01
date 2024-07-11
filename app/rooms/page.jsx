import Image from "next/image";

export default function Rooms() {
  const rooms = [
    {
      name: "Большой номер",
      image: "/bigroom.jpg",
      stuff: ["Телевизор смарт тВ", "Сан. узел", "Душ"],
    },
    {
      name: "Маленький номер",
      image: "/smallroom.png",
      stuff: ["Телевизор смарт тВ", "Сан. узел", "Душ"],
    },
  ];

  return (
    <main className="mt-40 justify-center">
      <section className="relative overflow-hidden ">
        <div className="container m-auto p-6 tablet:p-20">
          <h3 className="text-center text-4xl font-bold">Номера</h3>
          <div className="py-6 flex flex-col gap-24 max-tablet:min-w-[240px]  max-xl:max-w-[636px]">
            {rooms.map((room, index) => (
              <div className="">
              <h5 className="text-3xl text-center py-6">{room.name}</h5>
              <div
                className={` flex max-xl:flex-col gap-4 tablet:gap-16 justify-between ${
                  index % 2 == 0 ? "" : "flex-row-reverse"
                }`}
              >               
                <Image
                  height="536"
                  width="636"
                  src={room.image}
                  alt="Фото комнаты"
                  className="flex justify-center items-center"
                />
                <div className="flex flex-col flex-grow ">
                  <ul className=" tablet:min-h-[100%]  text-left p-4  opacity-75 border-[1px] border-[#ffffff]">
                    {room.stuff.map((item, item_index) => (
                      <ol>+{item}</ol>
                    ))}
                  </ul>
                </div>
              </div></div>
            ))}

            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
