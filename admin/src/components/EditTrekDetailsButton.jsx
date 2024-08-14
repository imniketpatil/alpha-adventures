// EditButtonCell.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const EditTrekDetailsButton = ({ value }) => {
  const { IdValue, setIdValue } = useContext(TrekIdContext);

  const navigate = useNavigate();

  const handleClick = () => {
    setIdValue(value);
    // console.log("value", value);
    // console.log("IdValue", IdValue);

    navigate("/newtrek", { replace: true });
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
      onClick={handleClick}
    >
      Edit
    </button>
  );
};

export default EditTrekDetailsButton;
