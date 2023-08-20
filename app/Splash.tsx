import Image from "next/image";
import styles from "./Splash.module.css";

export function Splash() {
  return (
    <div className="[background:linear-gradient(225deg,_#121212,_rgba(36,_121,_64,_0.4),_#121212);] w-full text-center flex items-center justify-center">
      <div className="flex justify-center w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] items-center">
        <div className="flex-col">
          <div
            className={
              "flex flex-col text-center md:text-right lg:text-right xl:text-right 2xl:text-right text-[40px] lg:text-[60px] xl:text-[80px] 2xl:text-[90px] " +
              styles.textgradient +
              " " +
              styles.headerDropShadow
            }
          >
            <div className="font-semibold inline-block pr-2 ">Currency</div>
            <div className="font-semibold inline-block pr-2">Tracker</div>
          </div>
          <div className="flex justify-center md:justify-end lg:justify-end xl:justify-end 2xl:justify-end">
            <div
              className={
                "leading-6 lg:leading-8 xl:leading-10 2xl:leading-10 font-light pb-[5%] text-[12px] md:text-[15px] lg:text-[18px] xl:text-[22px] 2xl:text-[25px] " +
                styles.headerDropShadow
              }
            >
              <p className="m-0">Quotation of the dollar and other</p>
              <p className="m-0">international currencies.</p>
            </div>
          </div>
        </div>
        <div className="w-0 md:w-5 lg:w-8 xl:w-12 2xl:w-16 "></div>
        <div
          className={
            "relative w-0 h-0 md:w-36 md:h-36 lg:w-52 lg:h-52 xl:w-60 xl:h-60 2xl:w-80 2xl:h-80 overflow-hidden " +
            styles.headerDropShadow
          }
        >
          <Image src="/diagramsvgrepocom-1.svg" alt="big diagram" fill />
        </div>
      </div>
    </div>
  );
}

export default Splash;
