"use client";

import { useState } from "react";

const page = () => {
  const [data, setdata] = useState([]);

  const handleSetCookie = () => {
    fetch("http://localhost:3000/api/setcookie")
      .then((response) => {
        // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error(
            `Network response was not OK. Status: ${response.status}`
          );
        }
        // Parse the JSON response
        return response.json();
      })
      .then((data) => {
        // Do something with the parsed data
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  };

  const handleheders = () => {
    (async () => {
      const res = await fetch(
        "http://localhost:3000/api/headersModifications",
        {
          headers: {
            Authorization: "ABC-123",
          },
        }
      );
      const Data = await res.json();
      setdata(Data);
    })();
  };

  return (
    <div className=" flex justify-center items-center h-[100vh]  from-gray-800 via-emereled-200 to-emereled-500 bg-gradient-to-br    ">
      <div className=" mt-[100px]   ">
        <button
          className="inline-flex items-center justify-center rounded-full bg-emerald-400 py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          onClick={handleSetCookie}
        >
          Set Cookie
        </button>

        <button
          className="inline-flex items-center justify-center rounded-full  bg-orange-800 py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          onClick={handleheders}
        >
          Send Request With Auth header
        </button>

        <div
          id="toast-default"
          className="  ml-10 mt-9   flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-600"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-emerald-500 bg-blue-300 rounded-lg bg-emerald-800 dark:text-blue-200">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
              />
            </svg>
            <span className="sr-only">{JSON.stringify(data)}</span>
          </div>
          <div className="ml-3   p-2 text-sm  font-bold  ">
            {JSON.stringify(data)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
