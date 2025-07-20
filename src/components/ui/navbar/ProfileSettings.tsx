import AnimatedFadeSlide from "../../utility/AnimatedFadeSlide";
import { FiUser } from "react-icons/fi";
import { LuWrench } from "react-icons/lu";
import ReusableButton from "../../common/ReusableButton";
import { FaPowerOff } from "react-icons/fa";

const ProfileSettings = ({ open }: { open: boolean }) => {
  return (
    <AnimatedFadeSlide
      isVisible={open}
      className="rounded-md absolute right-0 sm:right-0.5 top-17.5 bg-white inset-shadow-2xs shadow-2xl w-full sm:w-fit"
    >
      <div className="flex flex-col py-3">
        <div className="flex items-center gap-3 px-7 py-2 cursor-pointer transition duration-300 ease-in-out hover:bg-icon-hover">
          <FiUser size={16} />
          <span>Profile</span>
        </div>
        <div className="flex items-center justify-between gap-5 px-7 py-2 cursor-pointer transition duration-300 ease-in-out hover:bg-icon-hover">
          <a className="flex items-center gap-3">
            <LuWrench size={16} />
            <span>Settings</span>
          </a>
          <span className="bg-teal-500 text-white text-xs rounded-sm px-1">
            11
          </span>
        </div>
      </div>
      <hr className="text-gray-100" />
      <div className="flex py-1">
        <ReusableButton
          variant="text"
          className="w-full text-secondary hover:text-secondary cursor-pointer transition duration-300 ease-in-out hover:bg-icon-hover"
          icon={<FaPowerOff size={13} />}
        >
          Logout
        </ReusableButton>
      </div>
    </AnimatedFadeSlide>
  );
};

export default ProfileSettings;
