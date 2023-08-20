import Image from "next/image";
import styles from "./Splash.module.css";

export function Splash() {
  return (
    <div className="w-full h-[405px] text-center text-[25px] flex items-center justify-center">
      <div className="[background:linear-gradient(225deg,_#121212,_rgba(36,_121,_64,_0.4),_#121212);] w-full h-[405px]" />
      <div className="flex space-between absolute w-[55%] items-center">
        <div className="flex-col h-[405px] w-[50%]">
          <div
            className={
              "text-right text-[90.36px] " +
              styles.textgradient +
              " " +
              styles.headerDropShadow
            }
          >
            <div className="font-semibold inline-block w-[427.08px] pr-2 ">
              Currency
            </div>
            <div className="font-semibold inline-block w-[427.08px] pr-2">
              Tracker
            </div>
          </div>
          <div className="flex justify-end">
            <div
              className={
                "leading-[46.77px] font-light " + styles.headerDropShadow
              }
            >
              <p className="m-0">Quotation of the dollar and other</p>
              <p className="m-0">international currencies.</p>
            </div>
          </div>
        </div>
        <div className="w-[10%]"></div>
        <div
          className={
            "relative w-[303.7px] h-[303.7px] overflow-hidden " +
            styles.headerDropShadow
          }
        >
          <Image
            src="/diagramsvgrepocom-1.svg"
            alt="big diagram"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}

export default Splash;
