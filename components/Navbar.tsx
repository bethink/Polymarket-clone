import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useData } from "../contexts/DataContext";
import { common_file } from "../constant/constant";
import { Tab } from "@headlessui/react";


function Navbar() {
  const router = useRouter();
  const { account, loadWeb3 } = useData();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  console.log(router.asPath.includes("/market"),"checking");

  return (
    <>
      <nav aria-label="Top" className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 w-full">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            <button
              type="button"
              onClick={handleClick}
              className="relative rounded-md bg-white p-2 text-gray-400 md:hidden"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/" passHref>
                <h1 className='m-0 text-lg sm:text-2xl font-bold text-black dark:text-white'>{common_file.prediction_market.name}</h1>
              </Link>
            </div>

            <div className="hidden md:ml-auto md:flex md:items-center md:gap-8">
              {!router.asPath.includes("/market") && (
                <>
                  <TabButton
                    title="Market"
                    isActive={router.asPath === "/"}
                    url={"/"}
                  />
                  <TabButton
                    title="Portfolio"
                    isActive={router.asPath === "/portfolio"}
                    url={"/portfolio"}
                  />
                  <TabButton
                    title="Admin"
                    isActive={router.asPath === "/admin"}
                    url={"/admin"}
                  />
                </>
              )}
            </div>

            <div className="ml-auto flex items-center">
              {account ? (
                <div className="cursor-pointer flex items-center gap-2">
                  <div className="icon bg-gradient-to-r from-blue-500 from-50% to-rose-500 to-50% w-6 h-6 rounded-full">

                  </div>
                  <span className="text-blue-500 text-base font-semibold">
                    {account.substr(0, 10)}...
                  </span>
                </div>
              ) : (
                <button
                  className="cursor-pointer px-4 py-2 bg-blue-500 text-white text-base font-semibold rounded-lg"
                  onClick={() => {
                    loadWeb3();
                  }}
                >
                  Connect
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      {
        isSidebarOpen &&  <div className="fixed inset-0 z-50 bg-cusBlack-300">
          <div className="w-64 h-screen bg-white text-black flex flex-col py-4 gap-4">
            <div className="logo-wrapper flex justify-between items-center px-4">
              <Link href="/" passHref>
                <h1 className='m-0 text-lg font-bold text-black dark:text-white'>{common_file.prediction_market.name}</h1>
              </Link>
              <div className="icon cursor-poiter" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </div>
            <nav className="flex-1 px-4 flex flex-col gap-2">
              {!router.asPath.includes("/market") && (
                <>
                  <MobTabButton
                    title="Market"
                    isActive={router.asPath === "/"}
                    url={"/"}
                  />
                  <MobTabButton
                    title="Portfolio"
                    isActive={router.asPath === "/portfolio"}
                    url={"/portfolio"}
                  />
                  <MobTabButton
                    title="Admin"
                    isActive={router.asPath === "/admin"}
                    url={"/admin"}
                  />
                </>
              )}
            </nav>
          </div>
        </div>
      }
    </>
  );
}

export default Navbar;

const TabButton = ({
  title,
  isActive,
  url
}: {
  title: string;
  isActive: boolean;
  url: string;
}) => {
  return (
    <Link href={url} passHref>
      <div
        className={`flex items-center cursor-pointer`}
      >
        <span className={`text-base font-medium hover:text-blue-600 ${isActive ? "text-blue-600" : "text-gray-700"}`}>{title}</span>
      </div>
    </Link>
  );
};

const MobTabButton = ({
  title,
  isActive,
  url
}: {
  title: string;
  isActive: boolean;
  url: string;
}) => {
  return (
    <Link href={url} passHref>
      <div
        className={`flex items-center cursor-pointer p-2 w-full rounded-md ${isActive ? "bg-blue-400" : ""}`}
      >
        <span className={`text-base font-medium hover:text-gray-800 ${isActive ? "text-white" : "text-gray-700"}`}>{title}</span>
      </div>
    </Link>
  );
};
