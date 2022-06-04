/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const navigation = [
  {
    name: "Twitter",
    href: "https://twitter.com/smolizards",
    icon: (props) => (
      <FaTwitter
        size={24}
        className="hover:text-themegreen text-white hover:cursor-pointer"></FaTwitter>
    ),
  },

  {
    name: "Discord",
    href: "https://discord.gg/smolizards",
    icon: (props) => (
      <FaDiscord
        size={24}
        className="hover:text-themegreen text-white hover:cursor-pointer"></FaDiscord>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-400 ">
              <div>
                <span className="sr-only">{item.name}</span>
                <item.icon
                  className="h-6 w-6 hover:text-themegreen hover:cursor-pointer"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-lg text-gray-400">
            &copy; 2022 Based Labs
          </p>
        </div>
      </div>
    </footer>
  );
}
