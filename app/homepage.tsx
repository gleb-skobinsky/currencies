import { Splash } from "./Splash";
import { Poppins } from "next/font/google";
import AppNavBar from "./AppNavBar";
import CurrenciesList from "./CurrenciesList";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function HomePage() {
  return (
    <div className={"w-full text-left text-[32.91px] " + poppins.className}>
      <div>
        <AppNavBar />
        <Splash />
        <CurrenciesList />
      </div>
    </div>
  );
}

export default HomePage;
