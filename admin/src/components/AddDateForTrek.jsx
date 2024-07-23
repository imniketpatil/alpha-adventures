import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

function AddDateForTrek({ setDateList }) {
  const [inputList, setInputList] = useState([{ startDate: "", lastDate: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    setDateList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    setDateList(list);
  };

  const areInputsValid = () => {
    return inputList.every((input) => input.startDate && input.lastDate);
  };

  const handleAddClick = () => {
    if (areInputsValid()) {
      const newList = [...inputList, { startDate: "", lastDate: "" }];
      setInputList(newList);
      setDateList(newList);
    }
  };

  return (
    <div className="flex gap-5 flex-wrap">
      {inputList.map((x, i) => (
        <React.Fragment key={i}>
          <div className="box flex gap-2">
            <input
              type="date"
              name="startDate"
              placeholder="Start Date"
              className="p-2 border border-gray-300 rounded-lg"
              value={x.startDate}
              onChange={(e) => handleInputChange(e, i)}
              required
            />
            <input
              type="date"
              name="lastDate"
              placeholder="Last Date"
              className="p-2 border border-gray-300 rounded-lg"
              value={x.lastDate}
              onChange={(e) => handleInputChange(e, i)}
              required
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
                    !areInputsValid() && "text-gray-400 cursor-not-allowed"
                  }`}
                  onClick={handleAddClick}
                />
              )}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default AddDateForTrek;
