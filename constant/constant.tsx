import ContentLoader from "react-content-loader";
export const common_file = Object.freeze({
  prediction_market: { name: "Prediction Market" },
  token_name: { value: "TKN" }
});

export const MarketLoader = () => (
  <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:w-1/3 xl:w-1/3 my-2">
    <ContentLoader
      viewBox="0 0 400 300"
      backgroundColor="#e5e5e5"
      foregroundColor="#f3f3f3"
    >
      <rect x="5" y="42" rx="16" ry="16" width="380" height="200" />
    </ContentLoader>
  </div>
);

export const AdminCardSample = () => (
  <div className="w-1/2 pr-2">
    <div className="w-full overflow-hidden my-2">
      <div className="flex flex-col border border-gray-200 rounded-lg hover:border-blue-400 cursor-pointer">
        <ContentLoader
          viewBox="0 0 500 165"
          backgroundColor="#e5e5e5"
          foregroundColor="#f3f3f3"
        >
          <rect x="60" y="20" rx="10" ry="10" width="380" height="30" />
          <rect x="20" y="95" rx="5" ry="5" width="90" height="13" />
          <rect x="190" y="95" rx="5" ry="5" width="70" height="13" />
          <rect x="268" y="95" rx="10" ry="10" width="107" height="30" />
          <rect x="380" y="95" rx="10" ry="10" width="102" height="30" />
          <rect x="20" y="120" rx="5" ry="5" width="140" height="18" />
        </ContentLoader>
      </div>
    </div>
  </div>
);

export const AdminMarketCardLoader = () => (
  <main className="w-full flex flex-row flex-wrap py-4 max-w-5xl pb-6">
    <AdminCardSample />
    <AdminCardSample />
    <AdminCardSample />
    <AdminCardSample />
    <AdminCardSample />
    <AdminCardSample />
  </main>
);

export const MarketPositonCardLoader = () => (
  <ContentLoader
    width={"100%"}
    height={"100%"}
    viewBox="0 0 1500 1100"
    backgroundColor="#e5e5e5"
    foregroundColor="#f3f3f3"
  >
    <rect x="5" y="8" rx="16" ry="16" width="1500" height="215" />
    <rect x="5" y="245" rx="10" ry="10" width="270" height="35" />
    <rect x="5" y="310" rx="16" ry="16" width="1500" height="245" />
    <rect x="5" y="580" rx="16" ry="16" width="1500" height="245" />
    <rect x="5" y="850" rx="16" ry="16" width="1500" height="245" />
  </ContentLoader>
);

export const MarketPositonCardLoaderStat = () => (
  <ContentLoader
    width={"100%"}
    height={"100%"}
    viewBox="0 0 1500 850"
    backgroundColor="#e5e5e5"
    foregroundColor="#f3f3f3"
  >
    <rect x="5" y="42" rx="16" ry="16" width="1500" height="250" />
  </ContentLoader>
);

export const MarketDetailLoader = () => (
  <>
    <ContentLoader
      width={"100%"}
      height={"100%"}
      viewBox="0 0 380 45"
      backgroundColor="#e5e5e5"
      foregroundColor="#f3f3f3"
    >
      <rect x="5" y="4" rx="5" ry="5" width="370" height="38" />
    </ContentLoader>
  </>
);
export const MarketDetailLoader1 = () => (
  <>
    <ContentLoader
      width={"100%"}
      height={"100%"}
      viewBox="0 0 300 170"
      backgroundColor="#e5e5e5"
      foregroundColor="#f3f3f3"
    >
      <rect x="5" y="5" rx="10" ry="10" width="290" height="160" />
    </ContentLoader>
  </>
);
export const MarketDetailLoader2 = () => (
  <>
    <ContentLoader
      width={"100%"}
      height={"100%"}
      viewBox="0 0 80 100"
      backgroundColor="#e5e5e5"
      foregroundColor="#f3f3f3"
    >
      <rect x="5" y="5" rx="10" ry="10" width="70" height="90" />
    </ContentLoader>
  </>
);

export const PortfolioPageLoader = () => (
  <>
    <ContentLoader
      width={"100%"}
      height={"100%"}
      viewBox="0 0 380 45"
      backgroundColor="#e5e5e5"
      foregroundColor="#f3f3f3"
    >
      <rect x="5" y="4" rx="5" ry="5" width="370" height="38" />
    </ContentLoader>
  </>
);

export const calculateTimeLeft = (input: number, cInput: number) => {
  var offset = new Date().getTimezoneOffset();
  var input_utc = new Date(input);
  input_utc.setMinutes(input_utc.getMinutes() - offset);

  let difference;
  if (cInput) {
    var cInput_utc = new Date(cInput);
    cInput_utc.setMinutes(cInput_utc.getMinutes() - offset);

    difference = +new Date(input_utc) - +new Date(cInput_utc);
  } else {
    var cInput_utc_1 = new Date();
    cInput_utc_1.setMinutes(cInput_utc_1.getMinutes() - offset);

    difference = +new Date(input_utc) - +new Date(cInput_utc_1);
  }

  var cInput_utc_2 = new Date();
  cInput_utc_2.setMinutes(cInput_utc_2.getMinutes() - offset);

  difference = +new Date(input_utc) - +new Date(cInput_utc_2);

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0.1
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};
