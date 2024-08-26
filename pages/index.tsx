import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Filter } from "../components/Filter";
import { MarketCard } from "../components/MarketCard";
import Navbar from "../components/Navbar";
import { useData } from "../contexts/DataContext";
import styles from "../styles/Home.module.css";
import { common_file, MarketLoader } from "../constant/constant";

export interface MarketProps {
  id: any;
  title: string;
  imageHash: string;
  hasResolved?: boolean;
  totalAmount: string;
  totalYes: string;
  totalNo: string;
  endTimestamp: string;
}

export default function Home() {
  const { polymarket, account, loadWeb3, loading } = useData();
  const [markets, setMarkets] = useState<MarketProps[]>([]);
  console.log("🚀 ~ Home ~ markets:", markets);
  const [dataLoading, setDataLoading] = useState(true);
  const loaders = Array(12).fill(0);

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
        hasResolved: data.eventCompleted,
        totalAmount: data.totalAmount,
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

  return (
    <div className={styles.container}>
      <Head>
        <title>{common_file.prediction_market.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow max-w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col gap-6 pt-6">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4 md:gap-6">
            <div className="relative text-gray-500 focus-within:text-gray-400 w-full lg:flex-grow">
              <span className="absolute inset-y-0 left-0 flex items-center px-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </span>
              <input
                type="search"
                name="q"
                className="w-full py-3 px-3 text-base text-gray-700 bg-gray-100 rounded-xl pl-10 focus:outline-none"
                placeholder="Search markets..."
                autoComplete="off"
              />
            </div>
            <div className="flex gap-4 md:gap-6 lg:flex-shrink-0">
              <Filter
                list={["All", "Crypto", "Football", "Covid 19", "Politics"]}
                activeItem="All"
                category="Category"
                onChange={() => { }}
                menuItemsClassName={"left-0 lg:left-auto origin-top-left lg:right-0 lg:origin-top-right"}
              />
              <Filter
                list={["Volume", "Newest", "Expiring"]}
                activeItem="Volume"
                category="Sort By"
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="section-title">
            <h6 className="font-bold text-lg text-black">Market</h6>
          </div>
          {dataLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-4">
              {loaders.map((_, index) => (
                <div className="flex flex-col border border-gray-200 rounded-lg p-3 cursor-pointer" key={index} >
                  <MarketLoader />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-4">
              {markets.slice(1).map((market) => {
                return (
                  <MarketCard
                    id={market.id}
                    key={market.id}
                    title={market.title}
                    hasResolved={market.hasResolved}
                    totalAmount={market.totalAmount}
                    totalYes={market.totalYes}
                    totalNo={market.totalNo}
                    imageHash={market.imageHash}
                    endTimestamp={market.endTimestamp}
                  />
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
