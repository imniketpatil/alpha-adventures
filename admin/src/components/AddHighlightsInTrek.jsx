import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

function AddHighlightsInTrek({ setHighlights }) {
  const [inputList, setInputList] = useState([{ highlight: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index] = { highlight: value };
    setInputList(list);

    // Update the highlights state in the CreateTrek component
    const updatedHighlights = list.filter((item) => item.highlight !== "");
    setHighlights(updatedHighlights.map((item) => item.highlight));
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);

    // Update the highlights state in the CreateTrek component
    const updatedHighlights = list.filter((item) => item.highlight !== "");
    setHighlights(updatedHighlights.map((item) => item.highlight));
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    if (inputList[inputList.length - 1].highlight !== "") {
      setInputList([...inputList, { highlight: "" }]);
    }
  };

  return (
    <>
      <div className="flex gap-5 flex-wrap">
        {inputList.map((item, i) => (
          <div key={i} className="box flex">
            <input
              name="highlight"
              id={`highlight-${i}`}
              placeholder="Enter Highlight"
              className="p-2 border border-gray-300 rounded-lg"
              value={item.highlight}
              onChange={(e) => handleInputChange(e, i)}
            />

            <div className="btn-box flex flex-col justify-between">
              {inputList.length !== 1 && (
                <CloseRoundedIcon
                  className="mr-2 cursor-pointer"
                  onClick={() => handleRemoveClick(i)}
                />
              )}
              {inputList.length - 1 === i && (
                <AddBoxRoundedIcon
                  className={`cursor-pointer ${
                    inputList[inputList.length - 1].highlight === ""
                      ? "cursor-not-allowed text-gray-400"
                      : ""
                  }`}
                  onClick={handleAddClick}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddHighlightsInTrek;
