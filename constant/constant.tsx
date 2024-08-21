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
