import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div className="mt-8 max-sm:mt-5 text-sm  max-md:max-w-full">
      By clicking “Start Application“, I agree to Mercury’s
      <Link
        to="https://mercury.com/legal/terms"
        className="underline"
        target="_blank"
      >
        Terms of Use
      </Link>
      ,
      <Link
        to="https://mercury.com/legal/privacy"
        className="underline"
        target="_blank"
      >
        Privacy Policy
      </Link>
      and to receive electronic communication about my accounts and services per
      <Link
        to="https://mercury.com/legal/esign"
        className="underline"
        target="_blank"
      >
        Mercury’s Electronic Communications Agreement
      </Link>
      , and acknowledge receipt of
      <Link
        to="https://mercury.com/legal/patriot-act"
        className="underline"
        target="_blank"
      >
        Mercury’s USA PATRIOT Act disclosure
      </Link>
      .
    </div>
  );
};
export default TermsAndCondition;
