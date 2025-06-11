// ***** Nepali to English or English to Nepali Switch Date Picker using Sajan Maharjan's Nepali Date Picker *****
// import { useState, useEffect, useRef } from "react";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Button from "react-bootstrap/Button";
// import DatePicker from "react-datepicker";
// import NepaliDate from "nepali-date-converter";
// import "react-datepicker/dist/react-datepicker.css";
// import { Repeat } from "react-bootstrap-icons";

// const BilingualDatePicker = () => {
//   const [isNepali, setIsNepali] = useState<boolean>(false);
//   const [englishDate, setEnglishDate] = useState<Date | null>(new Date());
//   const nepaliDateInputRef = useRef<HTMLInputElement>(null);
//   const datePickerInstance = useRef<any>(null);

//   const nepDate = new NepaliDate(new Date());
//   const nepDateString = nepDate.format("YYYY-MM-DD");
//   const [nepaliDate, setNepaliDate] = useState<string>(nepDateString);

//   // Convert English date to Nepali date string
//   const convertToNepaliDate = (date: Date | null): string => {
//     if (!date) return "";
//     const nepDate = new NepaliDate(date);
//     return nepDate.format("YYYY-MM-DD");
//   };

//   // Convert Nepali date string to English date
//   const convertToEnglishDate = (nepDateString: string): Date | null => {
//     if (!nepDateString) return null;
//     const [year, month, day] = nepDateString.split("-").map(Number);
//     const nepDate = new NepaliDate(year, month - 1, day);
//     return nepDate.toJsDate();
//   };

//   const handleEnglishDateChange = (date: Date | null) => {
//     setEnglishDate(date);
//     setNepaliDate(convertToNepaliDate(date));
//   };

//   useEffect(() => {
//     if (isNepali && nepaliDateInputRef.current) {
//       // Initialize the date picker
//       const mainInput = nepaliDateInputRef.current;
//       datePickerInstance.current = (mainInput as any).nepaliDatePicker({
//         ndpYear: true,
//         ndpMonth: true,
//         ndpYearCount: 10,
//         unicodeDate: true,
//         // ndpTriggerButton: true,
//         onChange: function (date: any) {
//           setNepaliDate(date?.bs);
//           setEnglishDate(convertToEnglishDate(date?.bs));
//         },
//       });

//       // Cleanup function
//       return () => {
//         if (datePickerInstance.current) {
//           // Different nepali date picker implementations might handle cleanup differently
//           // Try these common cleanup methods
//           if (typeof datePickerInstance.current.destroy === "function") {
//             datePickerInstance.current.destroy();
//           } else if (nepaliDateInputRef.current) {
//             // Remove the date picker by clearing the input's value and events
//             (nepaliDateInputRef.current as any).nepaliDatePicker = null;
//             nepaliDateInputRef.current.value = "";
//           }
//         }
//       };
//     }
//   }, [isNepali]);

//   return (
//     <div className="m-3">
//       <InputGroup>
//         {isNepali ? (
//           <div>
//             <Form.Control
//               ref={nepaliDateInputRef}
//               // readOnly
//               // value={nepaliDate}
//               type="text"
//               id="nepali-datepicker"
//               placeholder="Select Nepali Date"
//             />
//           </div>
//         ) : (
//           <DatePicker
//             autoFocus
//             selected={englishDate}
//             onChange={handleEnglishDateChange}
//             dateFormat="yyyy-MM-dd"
//             className="form-control"
//             placeholderText="Select date"
//             customInput={<Form.Control />}
//           />
//         )}
//         <Button variant="light" onClick={() => setIsNepali(!isNepali)}>
//           <Repeat />
//         </Button>
//       </InputGroup>
//     </div>
//   );
// };

// export default BilingualDatePicker;

// ************ Nepali English Date picker Switch using nepali-datepicker-reactjs *************

// import { useState } from "react";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Button from "react-bootstrap/Button";
// import DatePicker from "react-datepicker";
// import NepaliDate from "nepali-date-converter";
// import { NepaliDatePicker } from "nepali-datepicker-reactjs";
// import "react-datepicker/dist/react-datepicker.css";
// import "nepali-datepicker-reactjs/dist/index.css";
// import { Repeat } from "react-bootstrap-icons";

// const BilingualDatePicker = () => {
//   const [isNepali, setIsNepali] = useState<boolean>(false);
//   const [englishDate, setEnglishDate] = useState<Date | null>(null);
//   const [nepaliDate, setNepaliDate] = useState<string>("");

//   // Convert English date to Nepali date string
//   const convertToNepaliDate = (date: Date | null): string => {
//     if (!date) return "";
//     const nepDate = new NepaliDate(date);
//     return nepDate.format("YYYY-MM-DD");
//   };

//   // Convert Nepali date string to English date
//   const convertToEnglishDate = (nepDateString: string): Date | null => {
//     if (!nepDateString) return null;
//     const [year, month, day] = nepDateString.split("-").map(Number);
//     const nepDate = new NepaliDate(year, month - 1, day);
//     return nepDate.toJsDate();
//   };

//   const handleEnglishDateChange = (date: Date | null) => {
//     setEnglishDate(date);
//     setNepaliDate(convertToNepaliDate(date));
//   };

//   const handleNepaliDateChange = (value: string) => {
//     setNepaliDate(value);
//     setEnglishDate(convertToEnglishDate(value));
//   };

//   return (
//     <div className="mb-3">
//       {/* <FormCheck
//         type="switch"
//         id="date-format-switch"
//         label={isNepali ? "नेपाली मिति" : "English Date"}
//         checked={isNepali}
//         onChange={() => setIsNepali(!isNepali)}
//         className="mb-2"
//       /> */}
//       <InputGroup>
//         {isNepali ? (
//           <div className="w-30">
//             <div className="form-control p-0">
//               <NepaliDatePicker
//                 value={nepaliDate}
//                 onChange={handleNepaliDateChange}
//                 options={{
//                   calenderLocale: "ne",
//                   valueLocale: "en",
//                   // dateFormat: "YYYY-MM-DD",
//                   closeOnSelect: true,
//                 }}
//                 className="w-100"
//                 inputClassName="form-control"
//               />
//             </div>
//           </div>
//         ) : (
//           <DatePicker
//             selected={englishDate}
//             onChange={handleEnglishDateChange}
//             dateFormat="yyyy-MM-dd"
//             className="form-control"
//             placeholderText="Select date"
//             customInput={<Form.Control />}
//           />
//         )}
//         <Button variant="light" onClick={() => setIsNepali(!isNepali)}>
//           <Repeat />
//         </Button>
//       </InputGroup>
//     </div>
//   );
// };

// export default BilingualDatePicker;

// *************** Sajan Maharjan's Nepali Date Picker *****************
// import { useState } from "react";
// import NepaliDate from "nepali-date-converter";

// const BilingualDatePicker = () => {
//   const nepDate = new NepaliDate(new Date());
//   const nepDateString = nepDate.format("YYYY-MM-DD");

//   const [nepaliDate, setNepaliDate] = useState(nepDateString);
//   window.onload = function () {
//     var mainInput: any = document.getElementById("nepali-datepicker");
//     mainInput.nepaliDatePicker({
//       ndpYear: true,
//       ndpMonth: true,
//       ndpYearCount: 10,
//       // dateFormat: "MM/DD/YYYY",
//       // unicodeDate: true,
//       onChange: function (date: any) {
//         setNepaliDate(date?.bs);
//       },
//     });
//   };

//   return (
//     <input
//       readOnly
//       value={nepaliDate}
//       type="text"
//       id="nepali-datepicker"
//       placeholder="Select Nepali Date"
//     />
//   );
// };

// export default BilingualDatePicker;

import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import NepaliDate from "nepali-date-converter";
import "react-datepicker/dist/react-datepicker.css";
import { Repeat } from "react-bootstrap-icons";

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
    <div className="m-3">
      <InputGroup>
        {isNepali ? (
          <div>
            <Form.Control
              // autoFocus
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
            autoFocus
            selected={englishDate}
            onChange={handleEnglishDateChange}
            dateFormat="yyyy-MM-dd"
            className="form-control"
            placeholderText="Select date"
            customInput={<Form.Control />}
          />
        )}
        <Button variant="light" onClick={() => setIsNepali(!isNepali)}>
          <Repeat />
        </Button>
      </InputGroup>
    </div>
  );
};

export default BilingualDatePicker;
