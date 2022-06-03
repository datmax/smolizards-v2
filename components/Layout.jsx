import { motion } from "framer-motion";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div className=" min-h-screen w-full bg-bg bg-top text-themegreen">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jolly+Lodger&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>{children}</div>
    </div>
  );
}
