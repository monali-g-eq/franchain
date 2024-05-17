import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";

const SignUpForm = () => (
  <form onSubmit={() => {}}>
    <CustomInput title="First name" />
    <CustomInput title="Last name" />
    <CustomInput title="Business name and HQ location" />
    <CustomInput title="Work email" />
    <CustomInput
      title="Password"
      error=" Password must be at least 12 characters"
    />
    <CustomButton disabled type="submit" />
  </form>
);

export default SignUpForm;
