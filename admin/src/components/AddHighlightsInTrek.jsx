import React, { useEffect, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

function AddHighlightsInTrek({ trekHighlights, setTrekHighlights }) {
  const [inputList, setInputList] = useState(
    trekHighlights.length
      ? trekHighlights
          .filter((highlight) => typeof highlight === "string")
          .map((highlight) => ({ highlight }))
      : [{ highlight: "" }]
  );

  useEffect(() => {
    // Initialize inputList with trekHighlights
    if (trekHighlights.length > 0) {
      const validHighlights = trekHighlights.filter(
        (highlight) => typeof highlight === "string"
      );
      setInputList(validHighlights.map((highlight) => ({ highlight })));
    }
  }, [trekHighlights]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index].highlight = String(value); // Ensure it's a string
    setInputList(list);
    setTrekHighlights(list.map((item) => item.highlight));
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    setTrekHighlights(list.map((item) => item.highlight));
  };

  const handleAddClick = () => {
    if (allFieldsFilled) {
      setInputList([...inputList, { highlight: "" }]);
    }
  };

  const allFieldsFilled = inputList.every(
    (item) => typeof item.highlight === "string" && item.highlight.trim() !== ""
  );

  return (
    <div className="flex gap-5 flex-wrap">
      {inputList.map((x, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <input
            className="p-2 border border-gray-300 rounded-lg flex-1"
            name="highlight"
            value={x.highlight}
            onChange={(e) => handleInputChange(e, i)}
            placeholder="Enter highlight"
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

export default AddHighlightsInTrek;
