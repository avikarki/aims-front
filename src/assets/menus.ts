import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { GrSend } from "react-icons/gr";
import { BsCollection } from "react-icons/bs";
import { RiHome8Line } from "react-icons/ri";

export const menuItems = [
  {
    label: "User Management",
    icon: HiAdjustmentsHorizontal,
    // path: "/",
  },
  {
    label: "Productivity",
    icon: GrSend,
    children: [
      {
        label: "Tasks",
        // path: "/products/electronics",
      },
      {
        label: "Event",
      },
      {
        label: "Calendar",
        // path: "/products/books",
      },
    ],
  },
  {
    label: "Transaction",
    icon: BsCollection,
    children: [
      {
        label: "Forms",
        children: [
          { label: "Form Elements" },
          { label: "Form Elements" },
          { label: "Form Elements" },
          { label: "Form Elements" },
          { label: "Form Elements" },
          { label: "Form Elements" },
          { label: "Form Elements" },
          //   { label: "Women" },
          //   {
          //     label: "Kids",
          //     icon: FaBaby,
          //     children: [{ label: "Baby" }, { label: "Teens" }],
          //   },
        ],
        // path: "/products/electronics",
      },
      {
        label: "Tables",
        children: [
          { label: "Basic Tables" },
          { label: "Basic Tables" },
          { label: "Basic Tables" },
          { label: "Basic Tables" },
          { label: "Basic Tables" },
          { label: "Basic Tables" },
          { label: "Basic Tables" },
          //   {
          //     label: "Kids",
          //     icon: FaBaby,
          //     children: [{ label: "Baby" }, { label: "Teens" }],
          //   },
        ],
      },
    ],
  },
  {
    label: "Report",
    icon: RiHome8Line,
    // path: "/settings",
  },
];
