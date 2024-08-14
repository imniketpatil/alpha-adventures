// App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import New from "./pages/New";
import Single from "./pages/Single";
import Login from "./pages/Login";
import PrivateRoute from "./utility/PrivateRoute";
import UserPage from "./pages/UserPage";
import Testimonials from "./pages/Testimonials";
import Treks from "./pages/Treks";
import TrekGuides from "./pages/TrekGuides";
import TrekTypes from "./pages/TrekTypes";
import TestimonialEditContextProvider from "./context/TestimonialEditContextProvider"; // Import your context provider
import TestimonialIdContextProvider from "./context/TestimonialIdContextProvider";
import TrekDeleteContextProvider from "./context/TrekDeleteContextProvider";
import TestimonialDeleteContextProvider from "./context/TestimonialDeleteContextProvider";
import TrekGuideIdContextProvider from "./context/TrekGuideIdContextProvider";
import TrekGuideEditContextProvider from "./context/TrekGuideEditContextProvider";
import TrekTypeIdContextProvider from "./context/TrekTypeIdContextProvider";
import TrekTypeEditContextProvider from "./context/TrekTypeEditContextProvider";
import TrekTypeDeleteContextProvider from "./context/TrekTypeDeleteContextProvider";
import CreateNewTrek from "./pages/CreateNewTrek";
import TrekIdContextProvider from "./context/TrekIdContextProvider";
import TrekDatesCotextProvider from "./context/TrekDatesCotextProvider";
import EditTrek from "./pages/EditTrek";
import DateDeleteContextProvider from "./context/DateDeleteContextProvider";
import DateIdContextProvider from "./context/DateIdContextProvider";
import NewTrekDate from "./pages/NewTrekDate";
import AddNewTrekDateTrekIdContextProvider from "./context/AddNewTrekDateTrekIdContextProvider";
import EditDateDetails from "./pages/EditDateDetails";
import EditDateDetailsIdContextProvider from "./context/EditDateDetailsIdContextProvider";
import EditTrekDetailsIdContextProvider from "./context/EditTrekDetailsIdContextProvider";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (e.g., using localStorage or cookies)
    const authToken = localStorage.getItem("accessToken");
    if (authToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <TestimonialEditContextProvider>
      <TestimonialIdContextProvider>
        <TrekDeleteContextProvider>
          <TestimonialDeleteContextProvider>
            <TrekGuideIdContextProvider>
              <TrekGuideEditContextProvider>
                <TrekTypeIdContextProvider>
                  <TrekTypeEditContextProvider>
                    <TrekTypeDeleteContextProvider>
                      <TrekDeleteContextProvider>
                        <TrekIdContextProvider>
                          <TrekDatesCotextProvider>
                            <DateDeleteContextProvider>
                              <DateIdContextProvider>
                                <AddNewTrekDateTrekIdContextProvider>
                                  <EditDateDetailsIdContextProvider>
                                    <EditTrekDetailsIdContextProvider>
                                      {" "}
                                      {/* Wrap your Routes with the context provider */}
                                      <Routes>
                                        {/* Login route */}
                                        <Route
                                          path="/login"
                                          element={<Login />}
                                        />

                                        {/* Redirect to home if logged in, otherwise to login */}
                                        <Route
                                          path="/"
                                          element={
                                            isLoggedIn ? (
                                              <Navigate to="/home" replace />
                                            ) : (
                                              <Navigate to="/login" replace />
                                            )
                                          }
                                        />

                                        {/* Private routes */}
                                        <Route
                                          path="/home"
                                          element={
                                            <PrivateRoute component={Home} />
                                          }
                                        />
                                        <Route
                                          path="/user"
                                          element={
                                            <PrivateRoute
                                              component={UserPage}
                                            />
                                          }
                                        />
                                        <Route
                                          path="/list"
                                          element={
                                            <PrivateRoute component={List} />
                                          }
                                        />
                                        <Route
                                          path="/trektype"
                                          element={
                                            <PrivateRoute
                                              component={TrekTypes}
                                            />
                                          }
                                        />
                                        <Route
                                          path="/trekguides"
                                          element={
                                            <PrivateRoute
                                              component={TrekGuides}
                                            />
                                          }
                                        />
                                        <Route
                                          path="/testimonials"
                                          element={
                                            <PrivateRoute
                                              component={Testimonials}
                                            />
                                          }
                                        />
                                        <Route
                                          path="/treks"
                                          element={
                                            <PrivateRoute component={Treks} />
                                          }
                                        />
                                        <Route
                                          path="/newtrek"
                                          element={
                                            <PrivateRoute
                                              component={CreateNewTrek}
                                            />
                                          }
                                        />
                                        <Route
                                          path="/edittrek"
                                          element={
                                            <PrivateRoute
                                              component={EditTrek}
                                            />
                                          }
                                        />
                                        <Route
                                          path="/newdateform"
                                          element={
                                            <PrivateRoute
                                              component={NewTrekDate}
                                            />
                                          }
                                        />
                                        <Route
                                          path="/edit-dates-for-trek"
                                          element={
                                            <PrivateRoute
                                              component={EditDateDetails}
                                            />
                                          }
                                        />
                                      </Routes>
                                    </EditTrekDetailsIdContextProvider>
                                  </EditDateDetailsIdContextProvider>
                                </AddNewTrekDateTrekIdContextProvider>
                              </DateIdContextProvider>
                            </DateDeleteContextProvider>
                          </TrekDatesCotextProvider>
                        </TrekIdContextProvider>
                      </TrekDeleteContextProvider>
                    </TrekTypeDeleteContextProvider>
                  </TrekTypeEditContextProvider>
                </TrekTypeIdContextProvider>
              </TrekGuideEditContextProvider>
            </TrekGuideIdContextProvider>
          </TestimonialDeleteContextProvider>
        </TrekDeleteContextProvider>
      </TestimonialIdContextProvider>
    </TestimonialEditContextProvider>
  );
}

export default App;
