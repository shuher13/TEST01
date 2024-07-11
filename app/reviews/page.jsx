import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      name: "Анна Сидорова",
      image: 'bg-[url("/review_photo.jpg")]',
      text: "Proin sed libero enim sed faucibus turpis. At imperdiet duiaccumsan sit amet nulla facilisi morbi tempus. Ut sem null pharetra diam sit amet nisl.",
    },
    {
      name: "Виктор Петров",
      image: 'bg-[url("/review_photo.jpg")]',
      text: "Proin sed libero enim sed faucibus turpis. At imperdiet duiaccumsan sit amet nulla facilisi morbi tempus. Ut sem null pharetra diam sit amet nisl.",
    },
    {
      name: "Пётр Викторович",
      image: 'bg-[url("/review_photo.jpg")]',
      text: "Proin sed libero enim sed faucibus turpis. At imperdiet duiaccumsan sit amet nulla facilisi morbi tempus. Ut sem null pharetra diam sit amet nisl.",
    },
  ];

  return (
    <main className="relative mt-40">
      <section className="relative overflow-hidden">
        <div className="container m-auto p-6 tablet:p-20 flex flex-col gap-8">
          <h3 className="text-center text-5xl font-bold">Отзывы</h3>
          <p className="text-center">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco Laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="flex justify-evenly gap-5 items-start flex-wrap">
            {reviews.map((review, id) => (
              <div
                className="flex flex-col gap-8 bg-slate-900 tablet:p-8 p-4 max-w-96 rounded-xl"
                key={`review_${id}`}
              >
                <div className="flex gap-5 justify-between flex-col-reverse tablet:flex-row items-center">
                  <h3 className="relative flex justify-center items-center text-2xl">
                    <Image
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-0 opacity-45"
                      src={"/quotes.png"}
                      width={60}
                      height={60}
                    />
                    <span className="relative z-20 text-center">{review.name}</span>
                  </h3>
                  <div
                    className={`w-24 h-24 relative ${review.image} bg-center bg-no-repeat bg-cover rounded-full overflow-hidden border-8 border-[#cdaa7d]`}
                  >
                    {/* <Image layout="fill" src={"/review_photo.jpg"} /> */}
                  </div>
                </div>
                <p className="italic text-right text-pretty leading-loose">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
