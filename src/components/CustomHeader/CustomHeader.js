import { useEffect, useState } from "react";
import Logo from "../../assets/Logo";
import RightArrow from "../../assets/RightArrow";

const CustomHeader = () => {
  const [header, setHeader] = useState("header");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 53) {
      return setHeader("header");
    } else if (window.scrollY > 50) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 flex justify-center items-center w-full ${header}`}
    >
      <div className="max-w-[1300px] mx-auto w-full">
        <div className="flex gap-2.5 justify-between px-10 py-5 w-full text-right max-md:flex-wrap max-md:px-5 max-md:max-w-full sticky z-10">
          <span className="max-sm:h-[35px] h-[77px]">
            <Logo />
          </span>
          <div className="flex gap-5 justify-between px-0.5 py-1 my-auto items-center">
            <span className="text-[16px] leading-[20.83px] font-normal">
              Log in
            </span>
            <span>
              <RightArrow />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CustomHeader;
