import { useForm } from "react-hook-form";
import FormInputNumber from "../../components/form/FormInputNumber";
import ReusableButton from "../../components/common/ReusableButton";

type EmiData = {
  loan: number;
  interestRate: number;
  term: number;
  emi: number;
};

const EmiCalculator = () => {
  const { handleSubmit, control, setValue } = useForm<EmiData>({
    defaultValues: {
      loan: 0,
      interestRate: 0,
      term: 0,
      emi: 0,
    },
  });

  const submitForm = (data: EmiData) => {
    const { loan, interestRate, term } = data;
    const P = loan;
    const R = interestRate / 12 / 100;
    const N = term;
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setValue("emi", Number(emi.toFixed(2)));
  };

  return (
    <div className="container mx-auto">
      <h2 className="mt-5">EMI Calculator</h2>
      <form noValidate onSubmit={handleSubmit(submitForm)}>
        <FormInputNumber
          autoFocus
          name="loan"
          control={control}
          label="Loan Amount"
        />
        <FormInputNumber
          name="interestRate"
          control={control}
          label="Interest Rate(%)"
        />
        <FormInputNumber name="term" control={control} label="Term (Months)" />
        <ReusableButton type="submit" className="my-3">
          Calculate EMI
        </ReusableButton>
        <FormInputNumber
          name="emi"
          control={control}
          label="Monthly Payment(EMI)"
          disabled
        />
      </form>
    </div>
  );
};

export default EmiCalculator;
