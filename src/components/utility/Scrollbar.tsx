import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

interface ScrollbarProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Scrollbar = ({ className, children, style }: ScrollbarProps) => {
  return (
    <>
      <SimpleBar className={className} style={style}>
        {children}
      </SimpleBar>
    </>
  );
};

export default Scrollbar;
