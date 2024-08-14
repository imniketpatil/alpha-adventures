import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import useGetTrekTypes from "../hooks/useGetTrekTypes";

export default function DropDownCheckBoxForTrekType({
  trekTypeId,
  trekType,
  setTrekType,
  setTrekTypeId,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    data: trekTypes,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["TrekTypes"],
    queryFn: useGetTrekTypes,
  });

  const options = useMemo(
    () =>
      trekTypes
        ? trekTypes.map((type) => ({
            value: type._id,
            label: type.name,
          }))
        : [],
    [trekTypes]
  );

  useEffect(() => {
    const initialOption =
      options.find((option) => option.value === trekTypeId) ||
      options.find((option) => option.value === trekType);
    setSelectedOption(initialOption || null);
  }, [trekType, trekTypeId, options]);

  const handleChange = (option) => {
    setSelectedOption(option);
    const selectedValue = option ? option.value : null;
    setTrekType(selectedValue);
    setTrekTypeId(selectedValue);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">Error fetching trek types</Alert>;
  }

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
