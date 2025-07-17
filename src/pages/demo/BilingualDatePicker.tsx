import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import NepaliDate from "nepali-date-converter";
import "react-datepicker/dist/react-datepicker.css";
import { FaRepeat } from "react-icons/fa6";

const BilingualDatePicker = () => {
  const [isNepali, setIsNepali] = useState<boolean>(false);
  const [englishDate, setEnglishDate] = useState<Date | null>(new Date());
  const nepaliDateInputRef = useRef<HTMLInputElement>(null);
  const datePickerInstance = useRef<any>(null);

  const nepDate = new NepaliDate(new Date());
  const nepDateString = nepDate.format("YYYY-MM-DD");
  // const [nepaliDate, setNepaliDate] = useState<string>(nepDateString);
  const [manualInput, setManualInput] = useState<string>(nepDateString);

  useEffect(() => {
    if (isNepali && nepaliDateInputRef.current) {
      datePickerInstance.current = (
        nepaliDateInputRef.current as any
      ).nepaliDatePicker({
        ndpYear: true,
        ndpMonth: true,
        ndpYearCount: 10,
        // unicodeDate: true,
        onChange: function (date: any) {
          const newDate = date?.bs;
          // setNepaliDate(newDate);
          setManualInput(newDate);
          setEnglishDate(convertToEnglishDate(newDate));
        },
      });

      return () => {
        if (datePickerInstance.current && nepaliDateInputRef.current) {
          // Cleanup by removing the date picker instance
          (nepaliDateInputRef.current as any).nepaliDatePicker = null;
          nepaliDateInputRef.current.value = "";
        }
      };
    }
  }, [isNepali]);

  const handleManualInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setManualInput(value);

    // Validate the input format (YYYY-MM-DD)
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      try {
        const [year, month, day] = value.split("-").map(Number);
        const nepDate = new NepaliDate(year, month - 1, day);
        if (nepDate.getDate() === day && nepDate.getMonth() === month - 1) {
          // setNepaliDate(value);
          setEnglishDate(nepDate.toJsDate());

          // Update the date picker if it exists
          if (datePickerInstance.current && nepaliDateInputRef.current) {
            nepaliDateInputRef.current.value = value;
          }
        }
      } catch (e) {
        // Invalid date, do nothing
      }
    }
  };

  // Convert English date to Nepali date string
  const convertToNepaliDate = (date: Date | null): string => {
    if (!date) return "";
    const nepDate = new NepaliDate(date);
    return nepDate.format("YYYY-MM-DD");
  };

  // Convert Nepali date string to English date
  const convertToEnglishDate = (nepDateString: string): Date | null => {
    if (!nepDateString) return null;
    try {
      const [year, month, day] = nepDateString.split("-").map(Number);
      const nepDate = new NepaliDate(year, month - 1, day);
      return nepDate.toJsDate();
    } catch (e) {
      return null;
    }
  };

  const handleEnglishDateChange = (date: Date | null) => {
    setEnglishDate(date);
    const newNepaliDate = convertToNepaliDate(date);
    // setNepaliDate(newNepaliDate);
    setManualInput(newNepaliDate);
  };

  return (
    <div className="container flex items-center mx-auto my-5">
      {isNepali ? (
        <div className="w-fit">
          <input
            className={`w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-gray-400 sm:text-sm/6 outline-gray-300 focus:outline-indigo-600`}
            ref={nepaliDateInputRef}
            value={manualInput}
            onChange={handleManualInputChange}
            type="text"
            id="nepali-datepicker"
            placeholder="YYYY-MM-DD"
            pattern="\d{4}-\d{2}-\d{2}"
          />
        </div>
      ) : (
        <DatePicker
          // autoFocus
          selected={englishDate}
          onChange={handleEnglishDateChange}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select date"
          customInput={
            <input
              className={`w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-gray-400 sm:text-sm/6 outline-gray-300 focus:outline-indigo-600`}
            />
          }
        />
      )}
      <button
        className="btn btn-secondary ml-3 cursor-pointer"
        onClick={() => setIsNepali(!isNepali)}
      >
        <FaRepeat />
      </button>
    </div>
  );
};

export default BilingualDatePicker;
