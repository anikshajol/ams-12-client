import { useState } from "react";
import DatePicker from "react-date-picker";

const DatePickerComponent = () => {
  const [value, onChange] = useState(null);

  return (
    <div>
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
};

export default DatePickerComponent;
