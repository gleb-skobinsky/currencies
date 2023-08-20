import Image from "next/image";

function AppNavBar() {
  return (
    <div className="relative flex items-center justify-center w-full h-[100px] text-xs lg:text-base xl:text-xl 2xl:text-xl text-white">
      <div className="flex items-center justify-between w-10/12 2xl:w-[1440px] xl:w-[1024px]">
        <div className="relative w-3 h-3 md:w-6 lg:w-8 xl:w-10 2xl:w-10 md:h-6 lg:h-8 xl:h-10 2xl:h-10 overflow-hidden">
          <Image src="/diagramsvgrepocom-2.svg" alt="diagram" layout="fill" />
        </div>
        <div className="grid grid-cols-4 w-10/12 lg:w-8/12 xl:w-8/12 2xl:5/12 h-[42px]">
          <div className="leading-[41.14px] font-light">Home</div>
          <div className="leading-[41.14px] font-light">Converter</div>
          <div className="leading-[41.14px] font-light">About</div>
          <div className="leading-[41.14px] font-light">Contacts</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AppNavBar;
