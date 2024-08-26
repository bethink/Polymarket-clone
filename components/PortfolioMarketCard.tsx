import moment from "moment";
import Img from "next/image";
import React from "react";
import Web3 from "web3";
import { common_file, ImageArr } from "../constant/constant";

export interface MarketProps {
  id: any;
  title: string;
  imageHash: string;
  totalAmount: string;
  totalYes: string;
  totalNo: string;
  userYes: string;
  userNo: string;
  hasResolved?: boolean;
  timestamp: string;
  endTimestamp: string;
}

export const PortfolioMarketCard: React.FC<MarketProps> = ({
  title,
  userYes,
  userNo,
  id,
  imageHash,
  totalYes,
  totalNo,
  totalAmount,
  hasResolved,
  timestamp,
  endTimestamp
}) => {
  let imageName = ImageArr[id - 1]?.image;
  var endingOn = moment(parseInt(endTimestamp));
  var now = moment(new Date()); //todays date
  var daysLeft = moment.duration(endingOn.diff(now)).asDays().toFixed(0);
  const daysCheck = parseInt(daysLeft) > 0 ? true : false;
  console.log("🚀 ~ daysCheck:", daysCheck);
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col border border-gray-200 rounded-lg p-5 hover:border-gray-600 cursor-pointer">
        <div className="flex flex-row items-center pb-8 gap-4">
          <div className="w-12 h-12 flex-shrink-0">
            <img
              // src={`https://ipfs.infura.io/ipfs/${imageHash}`}
              src={`/images/${imageName}`}
              className="rounded-full w-full h-full object-cover"
              width={55}
              height={55}
            />
          </div>
          <p className="text-base font-normal m-0 flex-grow">{title}</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 font-light">Outcome</span>
              <span className="text-base">{userYes ? "YES" : "NO"}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500 font-light text-right">
                Amount Added
              </span>
              <span className="text-base text-right">
                {Web3.utils.fromWei(userYes ?? userNo)}{" "}
                {common_file.token_name.value}
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500 font-light">Added On</span>
              <span className="text-base">
                {timestamp
                  ? moment(parseInt(timestamp) * 1000).format(
                      "MMMM D, YYYY HH:mm a"
                    )
                  : "N/A"}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500 font-light text-right">
                {daysCheck ? "Ending In" : "Ended"}
              </span>
              <span className={`text-base text-right`}>
                {parseInt(daysLeft) > 0 ? `${daysLeft} days` : "_"}
              </span>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-4 py-1.5 bg-blue-500 text-white w-fit text-sm font-medium rounded-md">
              Trade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
