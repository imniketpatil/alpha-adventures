// src/components/TrekGuidesTable.jsx

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { useQuery } from "@tanstack/react-query";
import useGetTreks from "../hooks/useGetTreks";
import EditTrekGuideButtonCell from "./EditTrekGuideButtonCell";
import DeleteTrekGuideButtonCell from "./DeleteTrekGuideButtonCell";

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
  { field: "name", headerName: "Name", width: 150 },

  { field: "highlights", headerName: "Highlights", width: 150 },
  {
    field: "description",
    headerName: "Description",
    width: 100,
  },
  { field: "location", headerName: "Location", width: 100 },
  { field: "startDate", headerName: "Start Date", type: "number", width: 100 },
  { field: "endDate", headerName: "End Date", type: "number", width: 100 },
  { field: "difficulty", headerName: "Difficulty", width: 100 },
  { field: "price", headerName: "Price", width: 150 },

  {
    field: "images",
    headerName: "Image",
    width: 150,
    renderCell: ImageCell,
    align: "center",
    sortable: false,
    headerAlign: "center",
  },
  { field: "guideDetails", headerName: "Guide Details", width: 300 },
  { field: "inclusions", headerName: "Inclusions", width: 150 },

  { field: "trekTypeDetails", headerName: "Trek Type Details", width: 150 },
  {
    field: "edit",
    headerName: "Edit",
    type: "boolean",
    width: 90,
    renderCell: EditTrekGuideButtonCell,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "delete",
    headerName: "Delete",
    type: "boolean",
    width: 90,
    renderCell: DeleteTrekGuideButtonCell,
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
        name: trek.name || "",
        highlights: trek.highlights || "",
        description: trek.description || "", // Ensure a default value if description is undefined
        location: trek.location || "",
        startDate: trek.startDate || "",
        endDate: trek.endDate || "",
        difficulty: trek.difficulty || "",
        price: trek.price || "",
        images: trek.images?.[0] || "", // Assuming the first image is to be displayed
        guideName: trek.guideDetails?.name || "", // Assuming the first guide's name is to be displayed
        trekTypeName: trek.trekTypeDetails?.name || "",
        edit: trek._id,
        delete: trek._id,
      }))
    : [];

  return (
    <div style={{ height: "600px", minHeight: "400px", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={8} pagination />
    </div>
  );
}
