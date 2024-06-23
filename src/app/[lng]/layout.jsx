import { Open_Sans, Montserrat } from "next/font/google";
import BazaHeader from "./_TheHeader/BazaHeader";
import styles from "./page.module.css";
import { languages } from "../i18n/settings";
// import { dir } from "i18next";
import "../globals.css";
import BazaFooter from "./_TheFooter/BazaFooter";
import { IoMdRocket } from "react-icons/io";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Baza Trainee Ukraine",
  description: "Generated by create next app",
};

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html
      lang={lng}
      // dir={dir(lng)}
      className={` ${open_sans.variable} ${montserrat.variable}`}
    >
      <body>
        <BazaHeader lng={lng} id="search-form" />
        <main>{children}</main>
        <a href="#top" className={styles.anchor}>
          <IoMdRocket className={styles.iconTop} />
        </a>
        <BazaFooter />
      </body>
    </html>
  );
}

// "use client";

// export default function GlobalError({ error, reset }) {
//   return (
//     <html>
//       <body>
//         <h2>Something went wrong!</h2>
//         <button onClick={() => reset()}>Try again</button>
//       </body>
//     </html>
//   );
// }
