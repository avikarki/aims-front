import {
  FaArrowCircleRight,
  FaCartArrowDown,
  FaRegClock,
  FaUser,
} from "react-icons/fa";
import ReusableButton from "../common/ReusableButton";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import AnimatedFadeSlide from "./AnimatedFadeSlide";

const notifications = [
  {
    icon: FaCartArrowDown,
    title: "Your order is placed",
    message: "If several languages coalesce the grammar",
    time: "3 min ago",
    color: "bg-primary-hover",
    image: "",
  },
  {
    icon: FaUser,
    title: "James Lemire",
    message: "It will seem like simplified English.",
    time: "1 hour ago",
    color: "",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg",
  },
  {
    icon: RiVerifiedBadgeLine,
    title: "Your item is shipped",
    message: "If several languages coalesce the grammar",
    time: "3 hours ago",
    color: "bg-green-500",
    image: "",
  },
  {
    icon: RiVerifiedBadgeLine,
    title: "Salena Layfield",
    message: "As a skeptical Cambridge friend of mine occidental.",
    time: "5 hours ago",
    color: "bg-green-500",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg",
  },
];

const Notification = ({ open }: { open: boolean }) => {
  return (
    <AnimatedFadeSlide
      isVisible={open}
      className="rounded-md absolute right-0 top-17.5 bg-white inset-shadow-2xs shadow-2xl w-85"
    >
      <div className="flex items-center justify-between px-4 pt-4">
        <h6>Notifications</h6>
        <ReusableButton variant="text" className="text-xs">
          View All
        </ReusableButton>
      </div>
      <div className="flex flex-col py-4 overflow-y-scroll h-50">
        {notifications.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 hover:bg-icon-hover transition duration-300 ease-in-out px-5 py-3 cursor-pointer"
          >
            <div
              className={`w-9 h-9 rounded-full ${item.color} text-white flex items-center justify-center mt-2`}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt=""
                  className="rounded-full w-9 h-9 object-cover"
                />
              ) : (
                <item.icon size={16} />
              )}
            </div>
            <div>
              <h6>{item.title}</h6>
              <p className="text-gray-500 text-xs">{item.message}</p>
              <div className="flex items-center text-xs text-gray-500 gap-2 mt-1">
                <FaRegClock />
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="text-gray-100" />
      <div className="flex">
        <ReusableButton
          className="w-full py-5 text-sm"
          variant="text"
          icon={<FaArrowCircleRight />}
        >
          View More...
        </ReusableButton>
      </div>
    </AnimatedFadeSlide>
  );
};

export default Notification;
