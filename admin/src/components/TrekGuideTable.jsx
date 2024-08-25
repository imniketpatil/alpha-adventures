import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { useQuery } from "@tanstack/react-query";
import useGetTrekGuides from "../hooks/useGetTrekGuides";
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
        alt="Trek Guide"
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
  { field: "experience", headerName: "Experience", type: "number", width: 100 },
  {
    field: "images",
    headerName: "Image",
    width: 150,
    renderCell: ImageCell,
    align: "center",
    sortable: false,
    headerAlign: "center",
  },
  { field: "bio", headerName: "Bio", width: 300 },
  { field: "instagramId", headerName: "Instagram ID", width: 150 },
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

export default function TrekGuidesTable() {
  const {
    data: trekGuides,
    error,
    isLoading,
    refetch,
  } = useQuery({ queryKey: ["TrekGuides"], queryFn: useGetTrekGuides });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">Error fetching trek guides</Alert>;
  }

  const rows = Array.isArray(trekGuides)
    ? trekGuides.map((guide, index) => ({
        id: index + 1,
        name: guide.name,
        experience: guide.experience || 0,
        images: guide.images[0],
        bio: guide.bio,
        instagramId: guide.instagramId,
        edit: guide._id,
        delete: guide._id,
      }))
    : [];

  return (
    <div style={{ height: "600px", minHeight: "400px", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={8} pagination />
    </div>
  );
}
