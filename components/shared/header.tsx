"use client";
import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import React, { PropsWithChildren } from "react";

import { LoaderCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import HeaderLogin from "./header-login";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header: React.FC<PropsWithChildren> = ({ children }) => {
  const { data: session, status } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  let adjustedPathName = pathName;
  if (pathName == "/") {
    adjustedPathName = "home";
  }

  const user = {
    imageUrl: "../acc-icon.png",
  };

  const adminNavigation = [
    { name: "Главная", href: "home", current: true },
    { name: "Тест", href: "/test", current: false },
    { name: "Создание тестов", href: "/create-test", current: false },
    { name: "Пользователи", href: "/users", current: false },
  ];

  const userNavigation = [
    { name: "Главная", href: "home", current: true },
    { name: "Тест", href: "/test", current: false },
  ];

  return (
    <>
      <div className="min-h-full relative  mx-auto flexh-full ring-black/5   shadow ring-1     ">
        <Disclosure as="nav" className="bg-white  ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-24 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    onClick={() => router.replace("/")}
                    alt="КВФ"
                    src=".././logo.png"
                    className="size-20 w-32"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {status == "loading"
                      ? userNavigation?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href.includes("home") ? "/" : item.href}
                          className={cn(
                            "rounded-md px-3 py-3 text-lg font-medium duration-300",
                            adjustedPathName.includes(item.href)
                              ? "bg-slate-300 text-zinc-950"
                              : "text-zinc-950 hover:bg-slate-300 hover:text-white"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))
                      : session?.user.role == "ADMIN"
                        ? adminNavigation?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href.includes("home") ? "/" : item.href}
                            className={cn(
                              "rounded-md px-3 py-3 text-lg font-medium duration-300",
                              adjustedPathName.includes(item.href)
                                ? "bg-slate-300 text-zinc-950"
                                : "text-zinc-950 hover:bg-slate-300 hover:text-white"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))
                        : userNavigation?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href.includes("home") ? "/" : item.href}
                            className={cn(
                              "rounded-md px-3 py-3 text-lg font-medium duration-300",
                              adjustedPathName.includes(item.href)
                                ? "bg-slate-300 text-zinc-950"
                                : "text-zinc-950 hover:bg-slate-300 hover:text-white"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {status == "loading" ? (
                    <LoaderCircle className="animate-spin" />
                  ) : status == "authenticated" ? (
                    <>
                      {session.user.name}
                      <HeaderLogin />
                    </>
                  ) : (
                    <div className="flex items-center">
                      <Button
                        key="Войти"
                        onClick={() => router.replace("/login")}
                        className="text-zinc-950 hover:bg-slate-300 hover:text-white rounded-md px-3 py-3 text-lg font-medium duration-300 mr-3"
                      >
                        Войти
                      </Button>
                      <Button
                        key="Регистрация"
                        onClick={() => router.replace("/register")}
                        className="text-zinc-950 hover:bg-slate-300 hover:text-white rounded-md px-3 py-3 text-lg font-medium duration-300"
                      >
                        Регистрация
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Открыть меню</span>
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <DisclosureButton
                key="Ваш профиль"
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Ваш профиль
              </DisclosureButton>
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img
                    alt=""
                    src={user.imageUrl}
                    className="size-10 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base/5 font-medium text-white">
                    {/* {user.name} */}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {/* {user.email} */}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <DisclosureButton
                  key="Ваш профиль"
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Ваш профиль
                </DisclosureButton>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
      {children}
    </>
  );
};
