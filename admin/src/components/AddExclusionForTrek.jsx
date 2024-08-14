import React, { useState, useEffect } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

function AddExclusionForTrek({ trekExclusions, setTrekExclusions }) {
  const [inputList, setInputList] = useState(
    trekExclusions.length
      ? trekExclusions
          .filter((exclusion) => typeof exclusion === "string")
          .map((exclusion) => ({ exclusion }))
      : [{ exclusion: "" }]
  );

  useEffect(() => {
    // Initialize inputList with trekExclusions
    if (trekExclusions.length > 0) {
      const validExclusions = trekExclusions.filter(
        (exclusion) => typeof exclusion === "string"
      );
      setInputList(validExclusions.map((exclusion) => ({ exclusion })));
    }
  }, [trekExclusions]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index].exclusion = String(value); // Ensure it's a string
    setInputList(list);
    setTrekExclusions(list.map((item) => item.exclusion));
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    setTrekExclusions(list.map((item) => item.exclusion));
  };

  const handleAddClick = () => {
    if (allFieldsFilled) {
      setInputList([...inputList, { exclusion: "" }]);
    }
  };

  // Check if all input fields are filled
  const allFieldsFilled = inputList.every(
    (item) => typeof item.exclusion === "string" && item.exclusion.trim() !== ""
  );

  return (
    <div className="flex gap-5 flex-wrap">
      {inputList.map((item, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <input
            className="p-2 border border-gray-300 rounded-lg flex-1"
            name="exclusion"
            value={item.exclusion}
            onChange={(e) => handleInputChange(e, i)}
            placeholder="Enter exclusion"
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

export default AddExclusionForTrek;
