import React, { useState } from "react";
import Select from "react-select";

export default function DropDownCheckBoxForInclusions({
  setInclusionsSelectedOption,
}) {
  const options = [
    { value: "Breakfast", label: "Breakfast" },
    { value: "Lunch", label: "Lunch" },
    { value: "Meal", label: "Meal" },
    { value: "Stays", label: "Stays" },
    { value: "Travel", label: "Travel" },
    { value: "Transport", label: "Transport" },
    { value: "Sport", label: "Sport" },
    { value: "Guide", label: "Guide" },
  ];

  const [selectedOption, setSelectedOption] = useState([]);

  const handleChange = (selectedOptions) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setSelectedOption(selectedValues);
    setInclusionsSelectedOption(selectedValues);
    // console.log("selectedValues", selectedValues);
  };

  return (
    <div className="App">
      <Select
        value={options.filter((option) =>
          selectedOption.includes(option.value)
        )}
        onChange={handleChange}
        options={options}
        isMulti
      />
    </div>
  );
}
