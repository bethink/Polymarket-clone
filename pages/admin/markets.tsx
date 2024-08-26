import Head from "next/head";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { MarketProps } from "..";
import { AdminMarketCard } from "../../components/AdminMarketCard";
import Navbar from "../../components/Navbar";
import { useData } from "../../contexts/DataContext";
import {
  AdminCardSample,
  AdminMarketCardLoader,
  common_file,
  MarketLoader
} from "../../constant/constant";
import { Filter } from "../../components/Filter";

const Markets: React.FC = () => {
  const { polymarket, account, loadWeb3, loading } = useData();
  const [markets, setMarkets] = useState<MarketProps[]>([]);
  const [filterItems, setFilterItems] = useState<MarketProps[]>([]);
  console.log("🚀 ~ markets:", markets);
  const [dataLoading, setDataLoading] = useState<Boolean>(true);
  const [activeStatus, setActiveStatus] = useState<string>("Live");
  const loaders = Array(9).fill(0);

  const getMarkets = useCallback(async () => {
    var totalQuestions = await polymarket.methods
      .totalQuestions()
      .call({ from: account });
    var dataArray: MarketProps[] = [];
    for (var i = 0; i < totalQuestions; i++) {
      var data = await polymarket.methods.questions(i).call({ from: account });
      dataArray.push({
        id: data.id,
        title: data.question,
        imageHash: data.creatorImageHash,
        totalAmount: data.totalAmount,
        hasResolved: data.eventCompleted,
        totalYes: data.totalYesAmount,
        totalNo: data.totalNoAmount,
        endTimestamp: data.endTimestamp
      });
    }
    setMarkets(dataArray);
    setDataLoading(false);
  }, [account, polymarket]);

  useEffect(() => {
    loadWeb3().then(() => {
      if (!loading) getMarkets();
    });
  }, [loading]);

  useEffect(() => {
    const filtered = markets.filter((item) => {
      const isResolved = activeStatus === "Live" ? false : true
      return item.hasResolved === isResolved;
    });
    setFilterItems(filtered);
  }, [markets, activeStatus])

  const handleOnSelect = (item: string) => {
    setActiveStatus(item)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <Head>
          <title>{common_file.prediction_market.name}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="w-full flex items-center justify-between">
              <Link href="/admin">
                <div
                  className="cursor-pointer inline-flex gap-4 px-4 py-3 bg-gray-400 rounded-xl bg-opacity-10 hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  onClick={() => {}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                  </svg>
                  <span className="font-base">Back</span>
                </div>
              </Link>
              <Filter
                list={["Live", "Resolved"]}
                activeItem={activeStatus}
                category="Sort By"
                onChange={(e) => handleOnSelect(e)}
              />
            </div>

            {dataLoading ? (
              <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loaders.map((_, index) => (
                  <div className="flex flex-col border border-gray-200 rounded-lg p-5 hover:border-gray-600" key={index}>
                    <AdminMarketCardLoader />
                  </div>
                ))}
              </main>
            ) : (
              // <AdminMarketCardLoader />
              <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterItems &&
                  filterItems.slice(1).map((market) => (
                    <div key={market.id}>
                      <AdminMarketCard
                        id={market.id}
                        imageHash={market.imageHash}
                        title={market.title}
                        totalAmount={market.totalAmount}
                        hasResolved={market.hasResolved}
                        endTimestamp={market.endTimestamp}
                        onYes={async () => {
                          await polymarket.methods
                            .distributeWinningAmount(market.id, true)
                            .send({ from: account });
                        }}
                        onNo={async () => {
                          await polymarket.methods
                            .distributeWinningAmount(market.id, false)
                            .send({ from: account });
                        }}
                      />
                    </div>
                  ))}
              </main>
            )}
          </div>
        </div>

      </div>
    </>
  );
};

export default Markets;
