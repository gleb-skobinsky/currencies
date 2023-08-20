import Image from "next/image";

function AppNavBar() {
  return (
    <div className="relative flex items-center justify-center w-full h-[40px] md:h-[50px] lg:h-[70px] xl:h-[90px] 2xl:h-[100px] text-xs lg:text-base xl:text-xl 2xl:text-xl text-white">
      <div className="flex items-center justify-between w-10/12 2xl:w-[1440px] xl:w-[1024px]">
        <div className="relative w-3 h-3 md:w-6 lg:w-8 xl:w-10 2xl:w-10 md:h-6 lg:h-8 xl:h-10 2xl:h-10 overflow-hidden">
          <Image src="/diagramsvgrepocom-2.svg" alt="diagram" fill />
        </div>
        <div className="grid grid-cols-4 w-10/12 lg:w-8/12 xl:w-8/12 2xl:5/12">
          <div className="font-light">Home</div>
          <div className="font-light">Converter</div>
          <div className="font-light">About</div>
          <div className="font-light">Contacts</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AppNavBar;
