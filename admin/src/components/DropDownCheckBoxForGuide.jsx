import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Select from "react-select";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import useGetTrekGuides from "../hooks/useGetTrekGuides";

export default function DropDownCheckBoxForGuide({ setTrekGuide }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const {
    data: trekGuides,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["TrekGuides"],
    queryFn: useGetTrekGuides,
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">Error fetching trek guides</Alert>;
  }

  const options =
    trekGuides?.map((guide) => ({
      value: guide._id,
      label: guide.name,
    })) || [];

  const handleChange = (selected) => {
    setSelectedOptions(selected);
    setTrekGuide(selected.map((option) => option.value)); // Pass the selected values to the parent component
  };

  return (
    <div className="App">
      <Select
        value={selectedOptions}
        onChange={handleChange}
        options={options}
        isMulti
      />
    </div>
  );
}
