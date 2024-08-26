import Img from "next/image";
import Link from "next/link";
import React from "react";
import Web3 from "web3";
import { MarketProps } from "../pages";
import { common_file, ImageArr } from "../constant/constant";

export const MarketCard: React.FC<MarketProps> = ({
  id,
  title,
  totalAmount,
  totalYes,
  hasResolved,
  totalNo,
  imageHash,
  endTimestamp
}) => {
  let imageName = ImageArr[id - 1]?.image;

  return (
    <div className="w-full overflow-hidden">
      <Link href={`/market/${id}`} passHref>
        <div className="flex w-full h-full flex-col border border-gray-200 rounded-lg p-3 hover:border-gray-600 cursor-pointer">
          <div className="flex flex-row gap-4 pb-8 items-center">
            <div className="w-12 h-12 flex-shrink-0">
              <img
                // src={`https://ipfs.infura.io/ipfs/${imageHash}`}
                src={`/images/${imageName}`}
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            <p className="text-base font-normal m-0 flex-grow">{title}</p>
          </div>
          <div className="flex flex-row flex-nowrap justify-between items-center">
            <div className="flex flex-col space-y-1">
              <span className="text-xs text-gray-600 font-medium">Volume</span>
              <span className="text-sm font-semibold text-black">
                {parseFloat(Web3.utils.fromWei(totalAmount, "ether")).toFixed(
                  2
                )}{" "}
                {common_file.token_name.value}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-xs text-green-500 font-medium">Yes</span>
                <div className="text-center rounded-sm">
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-semibold text-green-500 ring-1 ring-inset ring-green-500">
                    {parseFloat(Web3.utils.fromWei(totalYes, "ether")).toFixed(2)}{" "}
                    {common_file.token_name.value}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-rose-500 font-medium">No</span>
                <div className="text-center rounded-sm">
                  <span className="inline-flex items-center rounded-md bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-500 ring-1 ring-inset ring-rose-500">
                    {parseFloat(Web3.utils.fromWei(totalNo, "ether")).toFixed(2)}{" "}
                    {common_file.token_name.value}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
