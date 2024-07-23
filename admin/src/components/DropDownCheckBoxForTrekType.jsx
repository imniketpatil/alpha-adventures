import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Select from "react-select";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import useGetTrekTypes from "../hooks/useGetTrekTypes";

export default function DropDownCheckBoxForTrekType({ setTrekType }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    data: trekTypes,
    error,
    isLoading,
  } = useQuery({ queryKey: ["TrekTypes"], queryFn: useGetTrekTypes });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">Error fetching trek types</Alert>;
  }

  const options =
    trekTypes?.map((type) => ({
      value: type._id,
      label: type.name,
    })) || [];

  const handleChange = (option) => {
    setSelectedOption(option);
    setTrekType(option ? option.value : null); // Pass the selected value to parent component
  };

  return (
    <div className="App">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
}
