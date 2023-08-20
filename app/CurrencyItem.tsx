import styles from "./CurrencyItem.module.css";

const currencyColors = [
  styles.color1,
  styles.color2,
  styles.color3,
  styles.color4,
  styles.color5,
  styles.color6,
  styles.color7,
  styles.color8,
  styles.color9,
];

function getRandom(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}

function CurrencyItem(props: {
  name: string;
  symbol: string | undefined;
  ratio: number | null;
}) {
  let thisSymbol;
  if (props.symbol == undefined) {
    thisSymbol = "--";
  } else {
    thisSymbol = props.symbol;
  }
  return (
    <div className="h-16 md:h-24 lg:h-28 xl:h-32 2xl:h-36">
      <div
        className="relative w-full [background-color:#202025] [border-color:#474747] 
      rounded-md lg:rounded-lg box-border border-[1px] border-solid
      flex flex-row 
      py-3 pl-3 md:py-5 md:pl-5 lg:py-8  lg:pl-8 
      pr-10 md:pr-16 lg:pr-20 xl:pr-24
      items-center justify-start gap-[30px]"
      >
        <div
          className={`relative w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20 shrink-0 rounded-md lg:rounded-lg
        flex justify-center items-center ${getRandom(currencyColors)}`}
        >
          <div className="max-w-full text-[12px] md:text-[15px] lg:text-[18px] xl:text-[22px] 2xl:text-[25px]">
            {thisSymbol}
          </div>
        </div>

        <div className="max-w-[70%] flex flex-col">
          <div
            className="inline-block
            text-[12px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px] truncate"
          >
            {props.name}
          </div>
          <div
            className="font-light inline-block [color:#A7B2C3]
            text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[32px]"
          >
            R$ {props.ratio}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyItem;
