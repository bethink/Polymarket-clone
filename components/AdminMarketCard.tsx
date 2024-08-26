import Img from "next/image";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { calculateTimeLeft, common_file } from "../constant/constant";
import moment from "moment";

interface Props {
  id: string;
  title: string;
  imageHash: string;
  totalAmount: string;
  hasResolved?: Boolean;
  endTimestamp: string;
  onYes: () => void;
  onNo: () => void;
}

export const AdminMarketCard: React.FC<Props> = ({
  title,
  totalAmount,
  hasResolved,
  endTimestamp,
  onYes,
  onNo,
  imageHash
}) => {
  const timeStamp = endTimestamp;
  const time = new Date(timeStamp as string | number).getTime();
  var endingOn = moment(parseInt(endTimestamp));
  var now = moment(new Date()); //todays date
  var daysLeft = moment.duration(endingOn.diff(now)).asDays().toFixed(0);
  const checkDays = parseInt(daysLeft) <= 0;

  return (

    <div className="w-full overflow-hidden">
      <div className="flex flex-col border border-gray-200 rounded-lg p-5 hover:border-gray-600 cursor-pointer">
        <div className="flex flex-row gap-4 pb-4">
          <div className="w-12 h-12 flex-shrink-0">
            <img
              // src={`https://ipfs.infura.io/ipfs/${imageHash}`}
              src={"/images/us_election.webp"}
              className="rounded-full w-full h-full object-cover"
              width={55}
              height={55}
            />
          </div>
          <p className="text-lg font-normal m-0 flex-grow">{title}</p>
        </div>
        <div className="flex flex-row flex-nowrap justify-between items-start pb-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-500 font-normal pr-4">
              Total Liquidity
            </span>
            <span className="text-base text-sm text-gray-700">
              {parseFloat(Web3.utils.fromWei(totalAmount, "ether")).toFixed(2)}{" "}
              <p className="text-gray-600 text-m">
                {common_file.prediction_market.name}
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span
              className={`text-xs text-right text-gray-500 font-normal`}
            >
              {hasResolved
                ? "Resolved"
                : parseInt(daysLeft) > 0
                ? `${daysLeft} days`
                : "Ended"}
            </span>
            <span className="text-gray-600 text-right text-sm">{`${daysLeft} Days`}</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-end justify-end">
          <button
            disabled={hasResolved === true}
            className={`py-1 px-2 rounded-lg ${
              hasResolved ? "bg-green-200" : "bg-green-500"
            } text-green-50`}
            onClick={onYes}
          >
            Resolve YES
          </button>
          <button
            disabled={hasResolved === true}
            className={`py-1 px-2 rounded-lg ${
              hasResolved ? "bg-rose-200" : "bg-rose-500"
            } text-rose-50`}
            onClick={onNo}
          >
            Resolve NO
          </button>
        </div>
      </div>
    </div>
  );
};
