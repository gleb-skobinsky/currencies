import Image from "next/image";

function LastUpdate() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center items-center pt-3 md:pt-5 lg:pt-8 xl:pt-10 2xl:pt-12">
        <div className="relative w-[25px] md:w-[35px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]">
          <Image alt="" src="/circle-animation.svg" width={50} height={50} />
        </div>
        <div className="font-light inline-block pl-4 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[32px]">
          Last update at 23:59
        </div>
      </div>
    </div>
  );
}

export default LastUpdate;
