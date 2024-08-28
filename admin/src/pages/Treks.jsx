import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TrekTable from "../components/TrekTable";
import { useNavigate } from "react-router-dom";
import TrekDeleteContext from "../context/TrekDeleteContext";
import TrekIdContext from "../context/TrekIdContext";
import { useDeleteTrek } from "../hooks/useDeleteTrek";
import TrekDatesContext from "../context/TrekDatesContext";
import getTrekDates from "../hooks/useGetTrekDates";
import { useQuery } from "@tanstack/react-query";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DateDeleteContext from "../context/DateDeleteContext";
import { useDeleteTrekDate } from "../hooks/useDeleteTrekDate";
import DateIdContext from "../context/DateIdContext";
import EditDateDetailsIdContext from "../context/EditDateDetailsIdContext";
import useIdStore from "../app/IdStore";
import LoadingSpinner from "../components/LoadingSpinner";

function Treks() {
  const navigate = useNavigate();

  const deleteTrekMutation = useDeleteTrek();
  const deleteDateMutation = useDeleteTrekDate();

  const loading = useIdStore((state) => state.loading);

  const addTrekId = useIdStore((state) => state.addTrekId);

  const { IdForDate, setIdForDate } = useContext(DateIdContext);
  const { openDeleteBox, setDeleteBox } = useContext(TrekDeleteContext);
  const { openDatesBox, setDatesBox } = useContext(TrekDatesContext);
  const { IdValue } = useContext(TrekIdContext);
  const { openDeleteDateBox, setDeleteDateBox } = useContext(DateDeleteContext);
  const { setIdForDateDetails } = useContext(EditDateDetailsIdContext);

  const [feedback, setFeedback] = useState(null);
  const [hoveredDate, setHoveredDate] = useState(null);

  const {
    data: trekData = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["TrekDates", IdValue],
    queryFn: () => getTrekDates(IdValue),
    enabled: !!IdValue && openDatesBox,
  });

  const handleConfirmDelete = () => {
    deleteTrekMutation.mutate(IdValue, {
      onSuccess: () => {
        setDeleteBox(false);
        setFeedback("Trek deleted successfully.");
      },
      onError: (error) => {
        setFeedback(
          `Error deleting trek: ${
            error.response?.data?.message || error.message
          }`
        );
      },
    });
  };

  const handleCancelDelete = () => {
    setDeleteBox(false);
    setFeedback(null);
  };

  const handleCancelDate = () => {
    setDatesBox(false);
  };

  const handleDeleteTrekDateClick = (id) => {
    setIdForDate(id);
    setDeleteDateBox(true);
  };

  const handleCancelDateDelete = () => {
    setDeleteDateBox(false);
  };

  const handleConfirmDateDelete = () => {
    deleteDateMutation.mutate(IdForDate, {
      onSuccess: () => {
        setFeedback("Trek Date deleted successfully.");
        setDeleteDateBox(false);
      },
      onError: (error) => {
        setFeedback(
          `Error deleting trek Date: ${
            error.response?.data?.message || error.message
          }`
        );
      },
    });
  };

  const handleNewDateClick = () => {
    navigate("/newdateform");
  };

  const handleEditTrekClick = (id) => {
    navigate("/edit-dates-for-trek");
    setIdForDateDetails(id);
    addTrekId(id);
  };

  return (
    <>
      <div className="flex w-full h-screen bg-gray-100">
        <div className="w-1/6 h-screen border-r border-gray-300 shadow-lg">
          <Sidebar />
        </div>
        <div className="w-5/6 h-screen">
          <div className="font-body text-3xl px-6 py-4 h-screen bg-white shadow-lg overflow-auto">
            <Navbar />
            <hr className="border-t-2 border-gray-300 my-4" />
            <div className="w-full px-6">
              <div className="flex w-full justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-blue-500">Treks</h1>
                <button
                  className="bg-blue-500 hover:bg-blue-600 transition duration-200 ease-in-out rounded-xl text-lg px-5 py-3 text-white font-medium shadow-md"
                  onClick={() => navigate("/newtrek", { replace: true })}
                >
                  Add New Trek
                </button>
              </div>
              {feedback && (
                <div className="my-4 text-center text-lg text-red-500">
                  {feedback}
                </div>
              )}
              {openDeleteBox && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <p className="text-lg mb-4">
                      Do you really want to delete the Trek?
                    </p>
                    <div className="flex justify-center space-x-4">
                      <button
                        className="bg-red-500 hover:bg-red-600 transition duration-200 ease-in-out text-white py-2 px-4 rounded shadow-md"
                        onClick={handleConfirmDelete}
                      >
                        Yes
                      </button>
                      <button
                        className="bg-gray-300 hover:bg-gray-400 transition duration-200 ease-in-out text-gray-800 py-2 px-4 rounded shadow-md"
                        onClick={handleCancelDelete}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {openDatesBox && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-scroll">
                  <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full h-content mx-4 relative">
                    <h1 className="text-2xl font-semibold text-center mb-4 text-blue-600">
                      Trek Dates
                    </h1>
                    {isLoading ? (
                      <p className="text-center text-gray-600">Loading...</p>
                    ) : error ? (
                      <p className="text-center text-red-600">
                        Error loading trek dates.
                      </p>
                    ) : (
                      <div className="space-y-4">
                        {trekData.map((trek) =>
                          trek.trekDates?.map((trekDate, index) => {
                            const isDateHovered =
                              hoveredDate &&
                              hoveredDate.startDate === trekDate.startDate &&
                              hoveredDate.endDate === trekDate.endDate;
                            return (
                              <div
                                key={index}
                                className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
                              >
                                <p className="font-medium text-lg">
                                  Trek Batch {index + 1}
                                </p>
                                <p className="text-gray-700 text-lg font-medium">
                                  Start Date:{" "}
                                  <span
                                    className="font-semibold"
                                    onMouseEnter={() =>
                                      setHoveredDate(trekDate)
                                    }
                                    onMouseLeave={() => setHoveredDate(null)}
                                  >
                                    {new Date(
                                      trekDate.startDate
                                    ).toLocaleDateString("en-GB", {
                                      day: "2-digit",
                                      month: "2-digit",
                                      year: "numeric",
                                    })}
                                  </span>
                                </p>
                                <p className="text-gray-700 text-lg font-medium">
                                  End Date:{" "}
                                  <span
                                    className="font-semibold"
                                    onMouseEnter={() =>
                                      setHoveredDate(trekDate)
                                    }
                                    onMouseLeave={() => setHoveredDate(null)}
                                  >
                                    {new Date(
                                      trekDate.endDate
                                    ).toLocaleDateString("en-GB", {
                                      day: "2-digit",
                                      month: "2-digit",
                                      year: "numeric",
                                    })}
                                  </span>
                                </p>

                                {/* {isDateHovered && (
                                  <div
                                    className="absolute top-full left-80 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg p-2 z-10"
                                    style={{
                                      maxWidth: "250px",
                                      overflowY: "auto",
                                    }}
                                  >
                                    <Calendar
                                      value={[
                                        new Date(trekDate.startDate),
                                        new Date(trekDate.endDate),
                                      ]}
                                      tileClassName={({ date }) => {
                                        if (
                                          date >=
                                            new Date(trekDate.startDate) &&
                                          date <= new Date(trekDate.endDate)
                                        ) {
                                          return "highlighted";
                                        }
                                      }}
                                      view="month"
                                      // calendarType="US" // Ensure this is capitalized correctly
                                      tileDisabled={() => true}
                                    />
                                  </div>
                                )} */}

                                <div className="flex justify-between gap-6">
                                  <button
                                    onClick={() =>
                                      handleEditTrekClick(trekDate._id)
                                    }
                                  >
                                    <EditIcon
                                      style={{ color: "#4F46E5", fontSize: 32 }}
                                    />
                                  </button>

                                  <button
                                    onClick={() =>
                                      handleDeleteTrekDateClick(trekDate._id)
                                    }
                                  >
                                    <DeleteOutlineIcon
                                      style={{ color: "red", fontSize: 32 }}
                                    />
                                  </button>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    )}

                    <div className="flex justify-center gap-4 mt-6">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 transition duration-200 ease-in-out text-white py-2 px-4 rounded-lg shadow-md"
                        onClick={handleNewDateClick}
                      >
                        Add New Date
                      </button>
                      <button
                        className="bg-gray-300 hover:bg-gray-400 transition duration-200 ease-in-out text-gray-800 py-2 px-4 rounded-lg shadow-md"
                        onClick={handleCancelDate}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {openDeleteDateBox && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <p className="text-lg mb-4">
                      Do you really want to delete this Trek Date?
                    </p>
                    <div className="flex justify-center space-x-4">
                      <button
                        className="bg-red-500 hover:bg-red-600 transition duration-200 ease-in-out text-white py-2 px-4 rounded shadow-md"
                        onClick={handleConfirmDateDelete}
                      >
                        Yes
                      </button>
                      <button
                        className="bg-gray-300 hover:bg-gray-400 transition duration-200 ease-in-out text-gray-800 py-2 px-4 rounded shadow-md"
                        onClick={handleCancelDateDelete}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <TrekTable />
          </div>
        </div>
      </div>
      {loading && <LoadingSpinner />}
    </>
  );
}

export default Treks;
