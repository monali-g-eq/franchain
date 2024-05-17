const CustomInput = ({ error, title, ...props }) => (
  <>
    <div className="xl:mt-8 max-md:mt-4 max-xl:mt-6 max-md:text-[12px] text-[16px] max-md:leading-[15.62px] lg:leading-[20.83px] font-normal max-md:mr-1 max-md:max-w-full">
      {title}
    </div>
    <input
      className="shrink-0 self-end max-md:mt-1.5 lg:mt-2.5 max-w-full h-[56px] max-md:h-[33.86px] bg-white border border-indigo-300 border-solid max-md:mr-1 w-full rounded-[6.05px] pl-3"
      {...props}
    />
    {error && (
      <p className="mt-2.5 text-[16px] leading-[20.83px] font-normal text-red-500 max-md:mr-1 max-md:max-w-full">
        Password must be at least 12 characters
      </p>
    )}
  </>
);

export default CustomInput;
