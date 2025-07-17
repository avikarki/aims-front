import { Spinner } from "react-bootstrap";

type LoaderProps = {
  animation?: "grow" | "border";
  height?: string;
  width?: string;
  borderWidth?: string;
  size?: "sm";
  variant: string;
};

const Loader = ({
  height,
  width,
  borderWidth,
  size,
  animation,
  variant,
}: LoaderProps) => {
  return (
    <Spinner
      animation={animation}
      variant={variant}
      size={size}
      style={{ height, width, borderWidth }}
    />
  );
};

export default Loader;
