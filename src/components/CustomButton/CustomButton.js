const CustomButton = ({ ...props }) => (
  <button
    className="justify-center self-start mt-8 max-sm:mt-5 max-md:text-[12px] lg:text-[18px] max-md:w-[91.37px] lg:w-[144px]  max-md:h-[34.14px] lg:h-[53px] font-bold text-white bg-indigo-200 rounded-[60px] max-md:px-5"
    {...props}
  >
    Sign up
  </button>
);

export default CustomButton;
