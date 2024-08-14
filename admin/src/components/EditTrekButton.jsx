import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import EditTrekDetailsIdContext from "../context/EditTrekDetailsIdContext";

const EditTrekButton = ({ value }) => {
  const { setIdForTrekDetails } = useContext(EditTrekDetailsIdContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setIdForTrekDetails(value);
    navigate("/edittrek", { replace: true });
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

export default EditTrekButton;
