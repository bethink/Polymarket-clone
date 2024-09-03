import ContentLoader from "react-content-loader";
export const common_file = Object.freeze({
  prediction_market: { name: "Prediction Market" },
  token_name: { value: "TKN" }
});

export const MarketLoader = () => (
  <ContentLoader
    viewBox="0 0 100% 150"
    width="100%"
    height="120"
    backgroundColor="#e5e5e5"
    foregroundColor="#f3f3f3"
  >
    <circle cx="30" cy="30" r="30" />
    <rect x="80" y="25" rx="4" ry="4" width="80%" height="8" />
    <rect x="0" y="80" rx="4" ry="4" width="40" height="8" />
    <rect x="0" y="100" rx="4" ry="4" width="70" height="8" />
    <rect x="50%" y="80" rx="4" ry="4" width="40" height="8" />
    <rect x="50%" y="100" rx="4" ry="4" width="70" height="8" />
    <rect x="90%" y="80" rx="4" ry="4" width="40" height="8" />
    <rect x="85%" y="100" rx="4" ry="4" width="70" height="8" />
  </ContentLoader>
);

export const AdminCardSample = () => (
  <ContentLoader
    viewBox="0 0 100% 150"
    width="100%"
    height="170"
    backgroundColor="#e5e5e5"
    foregroundColor="#f3f3f3"
  >
    <circle cx="30" cy="30" r="30" />
    <rect x="80" y="25" rx="4" ry="4" width="80%" height="8" />
    <rect x="0" y="80" rx="4" ry="4" width="40" height="8" />
    <rect x="0" y="100" rx="4" ry="4" width="70" height="8" />
    <rect x="0" y="120" rx="4" ry="4" width="70" height="8" />

    <rect x="90%" y="80" rx="4" ry="4" width="40" height="8" />
    <rect x="85%" y="100" rx="4" ry="4" width="70" height="8" />
    <rect x="calc(100% - 80px)" y="140" rx="4" ry="4" width="80" height="30" />
    <rect x="calc(100% - 180px)" y="140" rx="4" ry="4" width="80" height="30" />
  </ContentLoader>
);

export const AdminMarketCardLoader = () => <AdminCardSample />;

export const MarketPositonCardLoader = () => (
  <ContentLoader
    viewBox="0 0 100% 150"
    width="100%"
    height="220"
    backgroundColor="#e5e5e5"
    foregroundColor="#f3f3f3"
  >
    <circle cx="30" cy="30" r="30" />
    <rect x="80" y="25" rx="4" ry="4" width="80%" height="8" />
    <rect x="0" y="80" rx="4" ry="4" width="50" height="8" />
    <rect x="0" y="100" rx="4" ry="4" width="100" height="8" />
    <rect x="90%" y="80" rx="4" ry="4" width="50" height="8" />
    <rect x="85%" y="100" rx="4" ry="4" width="100" height="8" />
    <rect x="0" y="140" rx="4" ry="4" width="50" height="8" />
    <rect x="0" y="160" rx="4" ry="4" width="100" height="8" />
    <rect x="90%" y="140" rx="4" ry="4" width="50" height="8" />
    <rect x="85%" y="160" rx="4" ry="4" width="100" height="8" />
    <rect
      x="calc(100% - 125px)"
      y="180"
      rx="8"
      ry="8"
      width="125"
      height="30"
    />
  </ContentLoader>
);

export const BoxLoader = () => (
  <ContentLoader viewBox="0 0 100% 150" width="100%" height="150">
    <rect x="0" y="0" rx="12" ry="12" width="100%" height="150" />
  </ContentLoader>
);

export const TitleLoader = () => (
  <ContentLoader viewBox="0 0 200 20" width="200" height="20">
    <rect x="0" y="0" rx="8" ry="8" width="200" height="20" />
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

export const ImageArr = [
  { image: "us_election.webp" },
  { image: "russia_war.jpeg" },
  { image: "paralympics.webp" },
  { image: "bitcoin.jpg" },
  { image: "jones.webp" },
  { image: "bitcoin.jpg" },
  { image: "bitcoin.jpg" },
  { image: "test-cric.jpeg" },
  { image: "bitcoin.jpg" },
  { image: "bitcoin.jpg" },
  { image: "test-cric.jpeg" },
  { image: "test-cric.jpeg" },
  { image: "test-cric.jpeg" },
  { image: "us_election.webp" },
  { image: "bitcoin.jpg" },
  { image: "test-cric.jpeg" },
  { image: "us_election.webp" },
  { image: "test-cric.jpeg" }
];
