// src/components/TrekGuidesTable.jsx

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { useQuery } from "@tanstack/react-query";
import useGetTreks from "../hooks/useGetTreks";
import DeleteButtonCell from "./DeleteButtonCell";
import CheckDatesButtonCell from "./CheckDatesButtonCell";
import EditTrekButton from "./EditTrekButton";

const ImageCell = ({ value }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <img
        src={value}
        alt="Trek"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

const columns = [
  { field: "id", headerName: "ID", width: 30 },
  { field: "trekName", headerName: "Trek Name", width: 150 },
  { field: "trekTitle", headerName: "Trek Title", width: 150 },
  { field: "suitableForAge", headerName: "Suitable For Age", width: 70 },
  { field: "altitude", type: "number", headerName: "Altitude", width: 70 },
  { field: "trekLocation", headerName: "Location", width: 100 },
  { field: "trekDescription", headerName: "Description", width: 150 },
  { field: "trekInfo", headerName: "Information", width: 150 },
  { field: "trekHighlights", headerName: "Highlights", width: 150 },
  { field: "trekInclusions", headerName: "Inclusions", width: 150 },
  { field: "trekExclusions", headerName: "Exclusions", width: 150 },
  {
    field: "trekCancellationPolicy",
    headerName: "Cancellation Policy",
    width: 150,
  },
  { field: "trekDifficulty", headerName: "Difficulty", width: 80 },
  { field: "trekTypeName", headerName: "Trek Type", width: 150 },
  {
    field: "images",
    headerName: "Image",
    width: 150,
    renderCell: ImageCell,
    align: "center",
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "dates",
    headerName: "Dates",
    type: "boolean",
    width: 90,
    renderCell: CheckDatesButtonCell,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "edit",
    headerName: "Edit",
    type: "boolean",
    width: 90,
    renderCell: EditTrekButton,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "delete",
    headerName: "Delete",
    type: "boolean",
    width: 90,
    renderCell: DeleteButtonCell,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
];

export default function TrekTable() {
  const {
    data: treks,
    error,
    isLoading,
    refetch,
  } = useQuery({ queryKey: ["Trek"], queryFn: useGetTreks });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">Error fetching trek guides</Alert>;
  }

  const rows = Array.isArray(treks)
    ? treks.map((trek, index) => ({
        id: index + 1,
        trekName: trek.trekName || "",
        trekTitle: trek.trekTitle || "",
        suitableForAge: trek.suitableForAge || "",
        altitude: trek.altitude || "",
        trekLocation: trek.trekLocation || "",
        trekDescription: trek.trekDescription || "",
        trekInfo: trek.trekInfo || "",
        trekHighlights: trek.trekHighlights || "",
        trekInclusions: trek.trekInclusions || "",
        trekExclusions: trek.trekExclusions || "",
        trekCancellationPolicy: trek.trekCancellationPolicy || "",
        trekDifficulty: trek.trekDifficulty || "",
        images: trek.images?.[0] || "", // Displaying the first image
        trekTypeName: trek.trekTypeName || "", // Displaying trek type name
        dates: trek._id,
        edit: trek._id,
        delete: trek._id,
      }))
    : [];

  return (
    <div style={{ height: "600px", minHeight: "400px", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        pagination
        componentsProps={{
          cell: {
            style: {
              fontSize: "16px",
              fontWeight: "bold",
            },
          },
          columnHeader: {
            style: {
              fontSize: "24px",
              fontWeight: "bold",
            },
          },
        }}
      />
    </div>
  );
}
