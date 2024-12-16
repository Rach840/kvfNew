"use client";

import { getUserSession } from "@/lib/get-session-server";
import React, { useState } from "react";

import Skeleton from '@mui/material/Skeleton';

export default function Profile() {

  const [usersTests, setUsersTests] = useState();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const user = await getUserSession();
      if (user) {
        const userTests = JSON.parse(user?.testsResult);
        setUser(user);
        setUsersTests(userTests);

      }
      setIsLoading(false)
    })();
  }, []);

  if (user) {
    return (
      <>
        <section className="relative -top-10 pt-40 pb-24">
          <img
            src=".././gradient.svg"
            alt="cover-image"
            className="w-full absolute top-0 left-0 z-0 h-60 object-cover"
          />
          <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
              <img
                src="../acc-icon.png"
                alt="user-avatar-image"
                className="border-4 border-solid size-32 border-white rounded-full object-cover"
              />
            </div>
            <div className="flex items-start justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
              <div className="block">
                <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">
                  {user?.firstName} {user?.lastName}
                </h3>
                <p className="font-normal text-base leading-7 text-gray-500  max-sm:text-center">
                  Организация {user?.organisation}
                </p>
              </div>
              <div className=" max-sm:flex-wrap max-sm:justify-center items-center gap-4">
                <p className="font-manrope font-bold text-lg text-gray-900 mb-1 max-sm:text-center">
                  Тест пройден: {user?.testPassed ? "Пройден" : "Не пройден"}
                </p>
                {/* <p className="font-manrope font-bold text-lg text-gray-900 mb-1 max-sm:text-center">
                  Когда пройден:{" "}
                  {user?.testPassed
                    ? new Date(Number(user.passedDate)).toLocaleString()
                    : "Не пройден"}
                </p> */}
                {/* <p className="font-manrope font-bold text-lg text-gray-900 mb-1 max-sm:text-center">
                  Правильных ответов:{" "}
                  {user?.testPassed ? user.testsResult + " баллов" : "Не пройден"}
                </p> */}
                <p className="font-manrope font-bold text-lg text-gray-900 mb-1 max-sm:text-center">
                  Электронная почта: {user?.email}
                </p>
                <p className="font-manrope font-bold text-lg text-gray-900 mb-1 max-sm:text-center">
                  Специализация:{" "}
                  {user?.role == "STUDENT"
                    ? "Студент"
                    : user.role == "SCHOOLBOY"
                      ? "Школьник"
                      : user.role == "SPECIALIST"
                        ? "Специалист"
                        : "Администратор"}
                </p>
              </div>
            </div>
          </div>
          <div>
            {usersTests != null ? (
              usersTests?.map((elem) => (
                <div
                  key={elem.testName}
                  className="relative bg-white container px-4 mx-auto flex h-full ring-black/5 max-lg:rounded-t-[2rem] my-6 py-10  shadow ring-1 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]"
                >
                  <p className="text-lg">
                    Тест <strong>{elem.testName}</strong> пройден на:{" "}
                    {elem.score} баллов. Тест пройден в{" "}
                    {new Date(Number(elem.passedDate)).toLocaleString()}
                  </p>
                </div>
              ))
            ) : (
              <div className="relative container mx-auto flex h-full ring-black/5 max-lg:rounded-t-[2rem] my-6 py-10  shadow ring-1 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]"></div>
            )}
          </div>
        </section>
      </>
    );
  } else if (isLoading) {
    return (
      <>
        <section className="relative -top-10 pt-40 pb-24">
          <img
            src=".././gradient.svg"
            alt="cover-image"
            className="w-full absolute top-0 left-0 z-0 h-60 object-cover"
          />

          <div className="w-full max-w-7xl mb-48 mx-auto px-6 md:px-8">
            <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
              <Skeleton animation="wave" variant="circular" width={120} height={120} />
            </div>
            <div className="flex items-start justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
              <div className="block">
                <Skeleton width={260} height={65} style={{ marginBottom: -10 }} animation="wave" />

                <Skeleton width={260} height={40} style={{ marginBottom: -40 }} animation="wave" />

              </div>
              <div className=" max-sm:flex-wrap max-sm:justify-center items-center gap-4">
                <Skeleton width={290} height={40} style={{ marginBottom: -6 }} animation="wave" />

                <Skeleton width={290} height={40} style={{ marginBottom: -6 }} animation="wave" />

                <Skeleton width={290} height={40} style={{ marginBottom: -6 }} animation="wave" />


              </div>
            </div>
          </div>
          <div className="container px-40 mx-auto">
            <Skeleton height={140} style={{ marginBottom: -40 }} animation="wave" />
            <Skeleton height={140} style={{ marginBottom: -40 }} animation="wave" />
            <Skeleton height={140} style={{ marginBottom: -40 }} animation="wave" />
            <Skeleton height={140} style={{ marginBottom: -40 }} animation="wave" />

          </div>
        </section>
      </>

    )
  } else {
    return (
      <div className="relative container mx-auto flex h-full ring-black/5 max-lg:rounded-t-[2rem] my-6 py-10  shadow ring-1 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
          <h4 className="mt-2 text-4xl text-center font-medium tracking-tight text-gray-950 max-lg:text-center">
            Войдите или зарегистрируйтесь чтобы увидеть профиль
          </h4>
        </div>
        <div className="flex flex-1 justify-center mt-10 px-10 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-12">
          <a
            href="/login"
            className="duration-300 mr-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Войти
          </a>
          <a
            href="/register"
            className="duration-300 mr-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Зарегистрироваться
          </a>
        </div>
      </div>
    );
  }
}
