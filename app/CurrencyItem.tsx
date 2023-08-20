import Image from "next/image";

function CurrencyItem(props: { name: string; src: string; ratio: number }) {
  return (
    <div className="h-[153px]">
      <div className="w-full [background-color:#202025] top-[0px] right-[0%] left-[0%] rounded-lg box-border flex flex-row py-[30px] pr-[100px] pl-8 items-center justify-start gap-[30px] border-[1px] border-solid [border-color:#474747]">
        <div className="relative w-20 h-20">
          <Image alt="" src={props.src} fill />
        </div>
        <div className="relative w-[278px] h-[93px]">
          <div className="w-[100.46%] top-[-4.11px] right-[-0.46%] left-[0%] h-[97.54px]">
            <div className="w-full top-[0px] left-[0%] text-16xl leading-[49.37px] text-gainsboro inline-block">
              {props.name}
            </div>
            <div className="top-[55.54px] left-[0%] leading-[41.14px] font-light inline-block [color:#A7B2C3]">
              R$ {props.ratio}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyItem;
