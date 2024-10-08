import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import useGetTestimonial from "../hooks/useGetTestimonial.js";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import TestimonialDeleteButton from "./TestimonialDeleteButton.jsx";

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
  { field: "name", headerName: "Name", width: 100 },
  { field: "rating", headerName: "Rating", type: "number", width: 70 },
  { field: "work", headerName: "Work", width: 100 },
  { field: "trek", headerName: "Trek", width: 100 },

  {
    field: "images",
    headerName: "Image",
    width: 150,
    renderCell: ImageCell,
    align: "center",
    sortable: false,
    headerAlign: "center",
  },
  { field: "comment", headerName: "Comment", width: 300 },

  {
    field: "delete",
    headerName: "Delete",
    type: "boolean",
    width: 90,
    renderCell: TestimonialDeleteButton,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
];

export default function TestimonialsTable() {
  const {
    data: testimonials,
    error,
    isLoading,
    refetch,
  } = useQuery({ queryKey: ["Testimonials"], queryFn: useGetTestimonial });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">Error fetching testimonials</Alert>;
  }

  const rows = testimonials.map((testimonial, index) => ({
    id: index + 1,
    name: testimonial.name,
    rating: testimonial.rating,
    work: testimonial.work,
    trek: testimonial.trek,
    images: testimonial.images,
    comment: testimonial.comment,
    edit: testimonial._id,
    delete: testimonial._id,
    rowHeight: 100,
  }));

  return (
    <div style={{ height: "600px", minHeight: "400px", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={8} pagination />
    </div>
  );
}
