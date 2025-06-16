import { Button, Container, Form } from "react-bootstrap";
import TextField from "../../components/TextField";
import { useForm } from "react-hook-form";

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
    <Container>
      <h1 className="mt-5">EMI Calculator</h1>
      <Form
        noValidate
        className="form-horizontal"
        onSubmit={handleSubmit(submitForm)}
      >
        <TextField
          autoFocus
          type="number"
          name="loan"
          control={control}
          label="Loan Amount"
          required
        />
        <TextField
          type="number"
          name="interestRate"
          control={control}
          label="Interest Rate(%)"
          required
        />
        <TextField
          type="number"
          name="term"
          control={control}
          label="Term (Months)"
          required
        />
        <Button className="my-3" variant="primary" type="submit">
          Calculate
        </Button>
        <TextField
          disabled
          type="number"
          name="emi"
          control={control}
          label="Monthly Payment(EMI)"
          required
        />
      </Form>
    </Container>
  );
};

export default EmiCalculator;
