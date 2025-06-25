import Loader from "./Loader";

type LoaderProps = {
  text: string;
};

const ButtonLoader = ({ text }: LoaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loader variant="light" height="20px" width="20px" borderWidth="2px" />{" "}
      {text}...
    </div>
  );
};

export default ButtonLoader;
