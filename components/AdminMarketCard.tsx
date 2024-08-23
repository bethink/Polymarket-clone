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
    <div className="w-full overflow-hidden my-2">
      <div className="flex flex-col border border-gray-200 rounded-lg p-5 hover:border-blue-400 cursor-pointer">
        <div className="flex flex-row space-x-5 pb-4">
          <div className="h-w-15">
            <Img
              src={`https://ipfs.infura.io/ipfs/${imageHash}`}
              className="rounded-full"
              width={55}
              height={55}
            />
          </div>
          <span className="text-lg font-semibold">{title}</span>
        </div>
        <div className="flex flex-row flex-nowrap justify-between items-center">
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-gray-500 font-light pr-4">
              Total Liquidity
            </span>
            <span className="text-base text-sm text-gray-700">
              {parseFloat(Web3.utils.fromWei(totalAmount, "ether")).toFixed(2)}{" "}
              <p className="text-gray-600 text-m">
                {common_file.prediction_market.name}
              </p>
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span
              className={`text-xs ${
                hasResolved ? "pr-4" : ""
              } text-gray-500 font-light`}
            >
              {hasResolved
                ? "Resolved"
                : parseInt(daysLeft) > 0
                ? `${daysLeft} days`
                : "Ended"}
            </span>
            <span className="text-gray-600 text-sm">{`${daysLeft} Days`}</span>
          </div>
          <div className="flex flex-row space-x-2 items-end">
            <button
              disabled={hasResolved === true || checkDays === true}
              className={`py-1 px-2 rounded-lg ${
                hasResolved || checkDays ? "bg-blue-200" : "bg-blue-500"
              } text-blue-50`}
              onClick={onYes}
            >
              Resolve YES
            </button>
            <button
              disabled={hasResolved === true || checkDays === true}
              className={`py-1 px-2 rounded-lg ${
                hasResolved || checkDays ? "bg-blue-200" : "bg-blue-500"
              } text-blue-50`}
              onClick={onNo}
            >
              Resolve NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
