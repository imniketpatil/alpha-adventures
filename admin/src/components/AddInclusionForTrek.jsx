import React, { useState, useEffect } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

function AddInclusionsInTrek({ trekInclusions, setTrekInclusions }) {
  const [inputList, setInputList] = useState([{ inclusion: "" }]);

  useEffect(() => {
    // Initialize inputList with trekInclusions
    if (trekInclusions.length > 0) {
      const validInclusions = trekInclusions.filter(
        (inclusion) => typeof inclusion === "string"
      );
      setInputList(validInclusions.map((inclusion) => ({ inclusion })));
    }
  }, [trekInclusions]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index].inclusion = String(value); // Ensure it's a string
    setInputList(list);

    // Update the inclusions state in the parent component
    setTrekInclusions(list.map((item) => item.inclusion));
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);

    // Update the inclusions state in the parent component
    setTrekInclusions(list.map((item) => item.inclusion));
  };

  const handleAddClick = () => {
    if (allFieldsFilled) {
      setInputList([...inputList, { inclusion: "" }]);
    }
  };

  // Check if all input fields are filled
  const allFieldsFilled = inputList.every(
    (item) => typeof item.inclusion === "string" && item.inclusion.trim() !== ""
  );

  return (
    <div className="flex gap-5 flex-wrap">
      {inputList.map((item, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <input
            className="p-2 border border-gray-300 rounded-lg flex-1"
            name="inclusion"
            value={item.inclusion}
            onChange={(e) => handleInputChange(e, i)}
            placeholder="Enter inclusion"
          />
          <div className="flex gap-1">
            {inputList.length !== 1 && (
              <CloseRoundedIcon
                className="bg-red-500 text-white rounded-full p-1 cursor-pointer"
                onClick={() => handleRemoveClick(i)}
              />
            )}
            {inputList.length - 1 === i && (
              <AddBoxRoundedIcon
                className={`rounded-full p-1 ${
                  allFieldsFilled ? "bg-blue-500" : "bg-gray-400"
                } text-white cursor-pointer`}
                onClick={handleAddClick}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddInclusionsInTrek;
