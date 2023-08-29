import Link from "next/link";
import React from "react";

const Navbeer = () => {
  return (
    <div>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <section ClassName=" w-600">
            <ul className="flex justify-between w-[400px] ">
              <li>
                <Link
                  href={"/"}
                  className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  href={"/Getcookie"}
                  className=" py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Getcookie
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </nav>
    </div>
  );
};

export default Navbeer;
