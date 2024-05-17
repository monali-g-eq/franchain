import SignUpSvg from "../../assets/Signup";
import SignUpForm from "../../components/SignUpForm";
import TermsAndCondition from "../../components/TermsAndCondition";
import bg from "../../assets/bg.png";

const HomePage = () => {
  return (
    <div className="w-full bg-slate-50 h-[100vh]">
      <div className="max-w-[1300px] mx-auto w-full h-[100vh]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 w-[full] h-[100vh]">
          <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full max-xl:hidden">
            <div className="flex flex-col grow justify-center items-end px-16 py-20 text-center text-zinc-800 max-md:px-5 max-md:max-w-full z-10">
              <div className="flex flex-col px-14 py-px mt-52 max-w-full  max-md:px-5 max-md:mt-10">
                <SignUpSvg />
                <div className="mt-11 text-[40px] font-medium leading-[52.08px] max-md:mt-10 max-md:max-w-full">
                  Royalty collections, simplified. It’s next level!
                </div>
                <div className="self-center mt-6 text-[22px] max-md:max-w-full leading-[28.64px]">
                  Revenue based invoice collection to make royalty collection as
                  easy as...
                </div>
              </div>
            </div>
          </div>
          <img
            src={bg}
            alt="bg"
            className="absolute left-0 top-0 bottom-0 right-0 w-[55%] max-xl:hidden"
          />
          <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-xl:w-full max-sm:py-14 xl:pt-10 max-md:px-5 max-xl:px-40 max-lg:px-20 max-lg:pt-32 max-md:pt-24 max-xl:pt-32">
            <div className="flex flex-col grow justify-center items-start lg:pr-12 text-base text-zinc-800 max-md:max-w-full ">
              <div className="flex flex-col max-md:mt-10 lg:mt-24 md:ml-3.5 max-w-full">
                <div className="max-md:text-[22px] md:text-[35px] font-medium max-md:leading-[28.64px] md:leading-[45.57px] max-md:max-w-full">
                  Get started with Franchain{" "}
                </div>
                <div className="max-md:text-[16px] mt-2.5 mb-5 text-[20px] font-normal max-md:leading-[20.83px] md:leading-[26.04px] max-md:max-w-full">
                  Create an account in 5 minutes.
                </div>
                <SignUpForm />
                <TermsAndCondition />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
