import "./globals.css";
import Header from "@/components/header/Header";
import { EB_Garamond } from "next/font/google";
import Footer from "@/components/footer/Footer";

const garamond = EB_Garamond({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Солнечная Вилла",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${garamond.className} text-lg text-[#ffffff] bg-[#111111]`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
