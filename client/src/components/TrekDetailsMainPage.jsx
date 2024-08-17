import React, { useEffect } from "react";
import SliderTrekDetailsMainPage from "./SliderTrekDetailsMainPage";
import { useQuery } from "@tanstack/react-query";
import useCourseStore from "../app/courseStore";
import useGetTrekDetailsById from "../hooks/useGetTrekDetailsById";
import useGetTrekDateDetailsById from "../hooks/useGetTrekDateDetailsById";
import ContactUsMainPageBelowSlider from "./ContactUsMainPageBelowSlider";
import TrekDetailsIconSection from "./TrekDetailsIconSection";
import TrekInfoAndDate from "./TrekInfoAndDate";

function TrekDetailsMainPage() {
  const { courses, trekDateId } = useCourseStore((state) => ({
    courses: state.courses,
    trekDateId: state.trekDateId,
  }));

  const {
    data: trekData = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["TrekData", courses],
    queryFn: () => useGetTrekDetailsById({ id: courses }),
    onError: (error) => console.error("Error fetching Trek Details:", error),
  });

  const {
    data: trekDateData = [],
    error: dateError,
    isLoading: isLoadingDate,
  } = useQuery({
    queryKey: ["TrekDateData", trekDateId],
    queryFn: () => useGetTrekDateDetailsById({ id: trekDateId }),
    onError: (error) =>
      console.error("Error fetching Trek Date Details:", error),
  });

  useEffect(() => {
    // This effect runs on component mount or when trekData or trekDateData changes
    if (trekData.length > 0) {
      console.log("Trek data loaded:", trekData);
    }
    if (trekDateData.length > 0) {
      console.log("Trek date data loaded:", trekDateData);
    }
  }, [trekData, trekDateData]);

  if (dateError || error) return <div>Error loading trek details</div>;

  const trekDetails = trekData[0] || {};
  const {
    trekName,
    trekTitle,
    suitableForAge,
    altitude,
    trekLocation,
    trekHighlights,
    trekDescription,
    trekType = [],
    trekTypeDescription = [],
    trekInfo,
    trekInclusions,
    trekExclusions,
    trekCancellationPolicy,
    trekDifficulty,
    images,
    withTravel,
    withoutTravel,
    allStartDate = [],
    allEndDate = [],
  } = trekDetails;

  const { trekTimelineDetails = {}, dateDifference = [] } =
    trekDateData[0] || {};
  const { scheduleTimeline = [] } = trekTimelineDetails;

  return (
    <>
      <SliderTrekDetailsMainPage
        images={images}
        trekName={trekName}
        trekTitle={trekTitle}
        isLoadingDate={isLoadingDate}
        isLoading={isLoading}
      />
      <ContactUsMainPageBelowSlider />
      <TrekDetailsIconSection
        trekDifficulty={trekDifficulty}
        altitude={altitude}
        suitableForAge={suitableForAge}
        dateDifference={dateDifference}
      />
      <TrekInfoAndDate
        trekName={trekName}
        trekTitle={trekTitle}
        trekLocation={trekLocation}
        trekDescription={trekDescription}
        trekType={trekType[0]}
        allStartDate={allStartDate}
        allEndDate={allEndDate}
        trekTypeDescription={trekTypeDescription[0]}
      />
    </>
  );
}

export default TrekDetailsMainPage;
