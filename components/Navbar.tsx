import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useData } from "../contexts/DataContext";
import { common_file } from "../constant/constant";
import { Tab } from "@headlessui/react";

function Navbar() {
  const router = useRouter();
  const { account, loadWeb3 } = useData();

  return (
    <>
      <nav className="w-full mt-auto max-w-5xl">
        <div className="flex flex-col gap-2 py-2 lg:flex-row lg:justify-between lg:items-center">
          <Link href="/" passHref>
            <span className="font-semibold text-xl cursor-pointer whitespace-nowrap">
              {common_file.prediction_market.name}
            </span>
          </Link>
          <div className="flex w-full">
            {!router.asPath.includes("/market") && (
              <div className="flex flex-row items-center gap-6 justify-center mr-auto lg:ml-auto">
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
              </div>
            )}
            {account ? (
              <div className="bg-green-500 px-4 py-2 rounded-md cursor-pointer">
                <span className="text-sm md:text-lg text-blue-50">
                  {account.substr(0, 10)}...
                </span>
              </div>
            ) : (
              <div
                className="bg-green-500 px-4 py-2 rounded-md cursor-pointer"
                onClick={() => {
                  loadWeb3();
                }}
              >
                <span className="text-sm md:text-lg text-blue-50">Connect</span>
              </div>
            )}
          </div>
        </div>
      </nav>
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
        className={`flex items-center border-b-2 font-semibold hover:border-blue-400 hover:text-blue-500 cursor-pointer ${
          isActive
            ? "border-blue-600 text-blue-600 text-lg font-semibold"
            : "border-white text-gray-400 text-lg"
        }`}
      >
        <span className="text-sm md:text-lg">{title}</span>
      </div>
    </Link>
  );
};
