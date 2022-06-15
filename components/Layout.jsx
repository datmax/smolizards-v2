/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import Footer from "../components/Footer";
const item = {
  hidden: {
    y: -100,
    color: "#0055FF",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    color: "#FF0088",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};
const container = {
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Team", href: "#team", current: false },
  { name: "Roadmap", href: "#roadmap", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <html className="h-full">
      <body className="h-full bg-bg sm:bg-cover ">
        {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
        <div className="min-h-full">
          <Disclosure as="div" className="transparent">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 justify-between">
                    <div className="flex w-full">
                      <div className=" sm:-my-px sm:ml-6 sm:flex sm:justify-center sm:items-center sm:justify-items-center sm:space-x-8 mx-2 sm:mx-20">
                        {router.asPath == "/" && (
                          <>
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? " text-themegreen"
                                    : " text-white hover:border-white hover:text-themegreen",
                                  "inline-flex items-center  px-4 pt-4 text-lg font-medium"
                                )}
                                aria-current={
                                  item.current ? "page" : undefined
                                }>
                                {item.name}
                              </a>
                            ))}
                            <Link href="/mint">
                              <a className="text-lg   px-4 pt-4 text-white">Mint</a>
                            </Link>
                          </>
                        )}

                        {router.asPath != "/" && (
                          <div className="text-white grid grid-cols-4 gap-8 text-lg ">
                            <Link href="/">
                              <a>Home</a>
                            </Link>
                            <Link href="/">
                              <a>Mint</a>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:hidden sm:items-center">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2  focus:ring-offset-2">
                            <span className="sr-only">Open user menu</span>
                          </Menu.Button>
                        </div>
                        {router.asPath == "/" && (
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md py-1 ring-1  ">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? "" : "",
                                        "block px-4 py-2 text-sm text-gray-300 "
                                      )}>
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        )}
                      </Menu>
                    </div>
                    <div className="-mr-2  hidden items-center sm:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-bg p-2 text-themegreen hover:bg-gray-100 ">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 pt-2 pb-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "border-indigo-500 bg-bg text-indigo-700"
                            : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                          "block  py-2 pl-3 pr-4 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}>
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className=" pt-4 pb-3">
                    <div className="flex items-center px-4"></div>
                    <div className="mt-3 space-y-1">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <div className=" py-10">
            <main>
              <div className="mx-auto max-w-7xl px-6 lg:px-8 text-themegreen">
                {/* Replace with your content */}
                {children}
                {/* /End replace */}
                <Footer></Footer>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
