import Image from "next/image";

function CurrencyItem(props: { name: string; src: string; ratio: number }) {
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
        <div className="relative min-w-max min-h-full w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20 shrink-0">
          <Image alt="" src={props.src} fill />
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
