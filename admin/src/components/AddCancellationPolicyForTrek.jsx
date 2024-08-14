import React, { useState, useEffect } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

function AddCancellationPolicyForTrek({
  trekCancellationPolicy,
  setTrekCancellationPolicy,
}) {
  const [inputList, setInputList] = useState(
    trekCancellationPolicy.length
      ? trekCancellationPolicy
          .filter((policy) => typeof policy === "string")
          .map((policy) => ({ policy }))
      : [{ policy: "" }]
  );

  useEffect(() => {
    // Initialize inputList with trekCancellationPolicy
    if (trekCancellationPolicy.length > 0) {
      const validPolicies = trekCancellationPolicy.filter(
        (policy) => typeof policy === "string"
      );
      setInputList(validPolicies.map((policy) => ({ policy })));
    }
  }, [trekCancellationPolicy]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index].policy = String(value); // Ensure it's a string
    setInputList(list);
    setTrekCancellationPolicy(list.map((item) => item.policy));
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    setTrekCancellationPolicy(list.map((item) => item.policy));
  };

  const handleAddClick = () => {
    if (allFieldsFilled) {
      setInputList([...inputList, { policy: "" }]);
    }
  };

  // Check if all input fields are filled
  const allFieldsFilled = inputList.every(
    (item) => typeof item.policy === "string" && item.policy.trim() !== ""
  );

  return (
    <div className="flex gap-5 flex-wrap">
      {inputList.map((x, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <input
            className="p-2 border border-gray-300 rounded-lg flex-1"
            name="policy"
            value={x.policy}
            onChange={(e) => handleInputChange(e, i)}
            placeholder="Enter cancellation policy"
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
                disabled={!allFieldsFilled}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddCancellationPolicyForTrek;
