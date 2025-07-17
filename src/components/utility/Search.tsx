import { FaSearch } from "react-icons/fa";
import ReusableButton from "../common/ReusableButton";
import AnimatedFadeSlide from "./AnimatedFadeSlide";

const Search = ({ open }: { open: boolean }) => {
  return (
    <AnimatedFadeSlide
      isVisible={open}
      className="p-4 rounded-md absolute right-0 -bottom-16 bg-white inset-shadow-2xs shadow-2xl"
    >
      <div className="flex ">
        <input
          type="text"
          placeholder="Search ..."
          className="border border-gray-300 px-3 py-1.5 rounded-l-md w-70 focus:outline-sky-600"
        />
        <ReusableButton className="rounded-l-none">
          <FaSearch size={12} />
        </ReusableButton>
      </div>
    </AnimatedFadeSlide>
  );
};

export default Search;
