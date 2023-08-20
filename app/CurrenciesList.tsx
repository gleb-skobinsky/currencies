import QuotationsHeader from "./QuotationsHeader";
import LastUpdate from "./LastUpdate";
import CurrencyItem from "./CurrencyItem";

function CurrenciesList() {
  const currencies = [
    { name: "Trade dollar", src: "/dollar-icon.svg", ratio: 5.13 },
    { name: "Argentine Peso", src: "/peso-argentino-icon.svg", ratio: 0.02 },
    { name: "Yen", src: "/yen-icon.svg", ratio: 0.03 },
    { name: "Canadian dollar", src: "/canadian-dollar-icon.svg", ratio: 3.78 },
    { name: "Australian dollar", src: "/australian-icon.svg", ratio: 3.48 },
    { name: "Yuan", src: "/won-icon.svg", ratio: 0.03 },
    { name: "Euro", src: "/euro-icon.svg", ratio: 5.43 },
    { name: "Bitcoin", src: "/bitcoin-icon.svg", ratio: 122148.71 },
    { name: "Pound", src: "/libra-icon.svg", ratio: 6.16 },
  ];
  return (
    <div>
      <LastUpdate />
      <QuotationsHeader />
      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-x-[10%] gap-y-5 lg:gap-y-12 w-10/12 2xl:w-[1440px] xl:w-[1024px]">
          {currencies.map((item, index) => {
            return (
              <div key={index}>
                <CurrencyItem
                  name={item.name}
                  src={item.src}
                  ratio={item.ratio}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pt-16"></div>
    </div>
  );
}

export default CurrenciesList;
