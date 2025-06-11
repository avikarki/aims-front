import { useState } from "react";
import type { ChangeEvent } from "react";
import NepaliDate from "nepali-date-converter";
import { Repeat } from "react-bootstrap-icons";
import "./dateField.css";

const BilingualDateField = () => {
  const [isNepali, setIsNepali] = useState(false);
  const [dateValue, setDateValue] = useState("");
  const [placeholder, setPlaceholder] = useState("YYYY-MM-DD");

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDateValue(e.target.value);
  };

  const toggleDateType = () => {
    if (!dateValue) {
      setIsNepali(!isNepali);
      setPlaceholder(isNepali ? "YYYY-MM-DD" : "YYYY-MM-DD (Nepali)");
      return;
    }
    try {
      if (isNepali) {
        // Convert Nepali date to English
        const [ny, nm, nd] = dateValue.split("-").map(Number);
        const englishDate = new NepaliDate(ny, nm - 1, nd).toJsDate();
        const year = englishDate.getFullYear();
        const month = String(englishDate.getMonth() + 1).padStart(2, "0");
        const day = String(englishDate.getDate()).padStart(2, "0");
        setDateValue(`${year}-${month}-${day}`);
        console.log(
          `English Date:
          ${englishDate}\n
          Formatted Date:
          ${year}-${month}-${day}`
        );
      } else {
        // Convert English date to Nepali
        const englishDate = new Date(dateValue);
        const nepaliDate = new NepaliDate(englishDate);
        const formattedDate = nepaliDate.format("YYYY-MM-DD");
        console.log(
          `English Date:
          ${englishDate}\n
          Nepali Date:
          ${nepaliDate}\n
          Formatted Date:
          ${formattedDate}`
        );
        setDateValue(formattedDate);
      }
      setIsNepali(!isNepali);
      setPlaceholder(isNepali ? "YYYY-MM-DD" : "YYYY-MM-DD (Nepali)");
    } catch (error) {
      alert("Invalid date format. Please use YYYY-MM-DD");
    }
  };

  return (
    <div className="date-converter-container">
      <div className="input-group">
        <input
          type="text"
          value={dateValue}
          onChange={handleDateChange}
          placeholder={placeholder}
          className="date-input"
        />
        <button onClick={toggleDateType} className="toggle-button">
          <Repeat />
        </button>
      </div>
      <div className="date-type-indicator">
        Current format: {isNepali ? "Nepali (B.S.)" : "English (A.D.)"}
      </div>
    </div>
  );
};

export default BilingualDateField;
