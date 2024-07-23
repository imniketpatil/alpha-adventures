import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import EditTrekTypeButtonCell from "./EditTrekTypeButtonCell";
import DeleteTrekTypeButtonCell from "./DeleteTrekTypeButtonCell.jsx";
import useGetTrekTypes from "../hooks/useGetTrekTypes.js";

const ImageCell = (params) => {
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
        src={params.value}
        alt="Testimonial"
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
  { field: "name", headerName: "Name", width: 200 },
  { field: "description", headerName: "Work", width: 200 },
  {
    field: "images",
    headerName: "Image",
    width: 250,
    renderCell: ImageCell,
    align: "center",
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "edit",
    headerName: "Edit",
    type: "boolean",
    width: 90,
    renderCell: EditTrekTypeButtonCell,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "delete",
    headerName: "Delete",
    type: "boolean",
    width: 90,
    renderCell: DeleteTrekTypeButtonCell,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
];

export default function TrekTypeTable() {
  const {
    data: trektypes,
    error,
    isLoading,
    refetch,
  } = useQuery({ queryKey: ["TrekTypes"], queryFn: useGetTrekTypes });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">Error fetching testimonials</Alert>;
  }

  // Calculate row heights based on the tallest image in the current data
  const rows = Array.isArray(trektypes)
    ? trektypes.map((trektypes, index) => ({
        id: index + 1,
        name: trektypes.name,
        description: trektypes.description,
        images: trektypes.images,
        edit: trektypes._id,
        delete: trektypes._id,
        rowHeight: 100, // Set a default row height (adjust as needed)
      }))
    : [];

  return (
    <>
      <div style={{ height: "600px", minHeight: "400px", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8} // Set default page size
          pagination
          // checkboxSelection
        />
      </div>
    </>
  );
}
