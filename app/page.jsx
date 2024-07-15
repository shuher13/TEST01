"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="overflow-hidden relative">
      <section className="relative overflow-hidden bg-main-image bg-no-repeat bg-cover">
        <motion.div
          initial={{ translateY: "-10%", opacity: "0" }}
          animate={{ translateY: "0%", opacity: "1" }}
          
          className="min-h-screen m-auto container"
        >
          <h1 className="text-6xl text-center leading-tight absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Гостевой дом <br /> «Солнечная Вилла» <br /> в Черноморском
          </h1>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 justify-center items-center">
            <svg
              width="20"
              height="30"
              viewBox="0 0 20 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="29"
                rx="7.5"
                stroke="white"
              />
              <circle cx="10" cy="9" r="2" fill="white" />
            </svg>
            Прокрутите вниз
          </div>
        </motion.div>
      </section>
      <section className="m-auto container">
        <div className="m-auto flex flex-col gap-10 justify-center items-center py-24">
          <svg
            width="80"
            height="64"
            viewBox="0 0 80 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.0513 36.5714C26.1538 36.5714 29.4017 37.8546 31.7949 40.4211C34.359 42.8271 35.6411 46.0351 35.6411 50.0451C35.6411 54.3759 34.1026 57.8246 31.0257 60.391C28.1197 62.797 24.1026 64 18.9744 64C12.9915 64 8.29064 61.8346 4.87183 57.5038C1.62397 53.1729 0 46.9975 0 38.9774C0 31.7594 1.70941 25.1028 5.12821 19.0075C8.54702 12.7519 13.6752 6.49623 20.5129 0.240597C20.6838 0.0801979 20.9402 0 21.282 0C21.7949 0 22.2222 0.2406 22.5641 0.721797C22.906 1.203 22.906 1.604 22.5641 1.9248C14.188 9.94485 9.99999 19.4085 9.99999 30.3158C9.99999 34.807 10.8547 38.0952 12.5641 40.1805C14.1026 37.7744 17.265 36.5714 22.0513 36.5714ZM66.4103 36.5714C70.5128 36.5714 73.7607 37.8546 76.1538 40.4211C78.7179 42.8271 80 46.0351 80 50.0451C80 54.3759 78.4615 57.8246 75.3846 60.391C72.4786 62.797 68.4616 64 63.3334 64C57.3505 64 52.6496 61.8346 49.2308 57.5038C45.9829 53.1729 44.359 46.9975 44.359 38.9774C44.359 31.7594 46.0684 25.1028 49.4872 19.0075C52.906 12.7519 58.0342 6.49623 64.8718 0.240597C65.0427 0.0801979 65.2992 0 65.641 0C66.1539 0 66.5812 0.2406 66.9231 0.721797C67.265 1.203 67.265 1.604 66.9231 1.9248C58.547 9.94485 54.359 19.4085 54.359 30.3158C54.359 34.807 55.2137 38.0952 56.9231 40.1805C58.4616 37.7744 61.624 36.5714 66.4103 36.5714Z"
              fill="white"
            />
          </svg>
          <div className="text-xl text-center leading-9 max-w-[650px] flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu
              nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque
              accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada
              sociis tristique. Viverra augue lorem ut quisque quam tortor,
              malesuada iaculis.
            </p>
            <p>
              Et elementum at nulla venenatis, faucibus integer. Auctor neque
              eros, viverra rutrum. Fames ultrices condimentum tortor nec
              penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
