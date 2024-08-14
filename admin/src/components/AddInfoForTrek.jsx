import React, { useState, useEffect } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

function AddInfoForTrek({ trekInfo, setTrekInfo }) {
  const [inputList, setInputList] = useState([{ info: "" }]);

  useEffect(() => {
    // Initialize inputList with trekInfo, ensuring all elements are strings
    if (trekInfo.length > 0) {
      const validInfo = trekInfo.filter((info) => typeof info === "string");
      setInputList(validInfo.map((info) => ({ info })));
    }
  }, [trekInfo]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index].info = String(value); // Ensure it's a string
    setInputList(list);

    // Update the info state in the parent component
    const updatedInfo = list.filter((item) => item.info !== "");
    setTrekInfo(updatedInfo.map((item) => item.info));
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);

    // Update the info state in the parent component
    const updatedInfo = list.filter((item) => item.info !== "");
    setTrekInfo(updatedInfo.map((item) => item.info));
  };

  const handleAddClick = () => {
    if (allFieldsFilled) {
      setInputList([...inputList, { info: "" }]);
    }
  };

  // Check if all input fields are filled
  const allFieldsFilled = inputList.every(
    (item) => typeof item.info === "string" && item.info.trim() !== ""
  );

  return (
    <div className="flex gap-5 flex-wrap">
      {inputList.map((item, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <input
            name="TrekInfo"
            id={`info-${i}`}
            placeholder="Enter Info"
            className="p-2 border border-gray-300 rounded-lg flex-1"
            value={item.info}
            onChange={(e) => handleInputChange(e, i)}
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

export default AddInfoForTrek;
