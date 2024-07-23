import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

function AddTimelineForTheTrek() {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  return (
    <>
      <div className="flex gap-5 flex-wrap">
        {inputList.map((x, i) => {
          return (
            <React.Fragment key={i}>
              <div className="box flex gap-2">
                <input
                  type="date"
                  name="startDate"
                  id="highlight"
                  placeholder="Enter Start Date"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={x.firstName}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <input
                  type="date"
                  name="lastDate"
                  id="highlight"
                  placeholder="Enter Last Date"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={x.lastName}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <div className="btn-box flex flex-col justify-between">
                  {inputList.length !== 1 && (
                    <CloseRoundedIcon
                      className="mr-2 cursor-pointer"
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </CloseRoundedIcon>
                  )}
                  {inputList.length - 1 === i && (
                    <AddBoxRoundedIcon
                      className="cursor-pointer"
                      onClick={handleAddClick}
                    >
                      Add
                    </AddBoxRoundedIcon>
                  )}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default AddTimelineForTheTrek;
