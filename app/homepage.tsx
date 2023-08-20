import CurrencyItem from "./CurrencyItem";
import { Splash } from "./Splash";
import { Poppins } from "next/font/google";
import AppNavBar from "./AppNavBar";
import Image from "next/image";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function HomePage() {
  const currencies = [
    { name: "Trade dollar", src: "/dollar-icon.svg", ratio: 5.13 },
    { name: "Argentine Peso", src: "/peso-argentino-icon.svg", ratio: 0.02 },
    { name: "Yen", src: "/yen-icon.svg", ratio: 0.03 },
    { name: "Canadian dollar", src: "/canadian-dollar-icon.svg", ratio: 3.78 },
    {
      name: "Australian dollar",
      src: "/australian-dollar-icon.svg",
      ratio: 3.48,
    },
    { name: "Yuan", src: "/won-icon.svg", ratio: 0.03 },
    { name: "Euro", src: "/euro-icon.svg", ratio: 5.43 },
    { name: "Bitcoin", src: "/bitcoin-icon.svg", ratio: 122148.71 },
    { name: "Pound", src: "/libra-icon.svg", ratio: 6.16 },
  ];
  return (
    <div className={"w-full text-left text-[32.91px] " + poppins.className}>
      <div>
        <AppNavBar />
        <Splash />
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-row pt-12">
            <Image alt="" src="/circle-animation.svg" width={50} height={50} />
            <div className="left-[68.01px] leading-[41.14px] font-light inline-block w-[469px] h-[36.26px]">
              Last update at 23:59
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center pt-10">
          <div className="w-[1440px]">
            <div className="leading-[41.14px] font-light text-white">
              Quotations
            </div>
            <div className="top-[66px] left-[8px] [background-color:#474747] w-[520px] h-0.5 mt-6 mb-6" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="grid grid-cols-2 gap-x-44 gap-y-12 w-[1440px]">
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
    </div>
  );
}

export default HomePage;
