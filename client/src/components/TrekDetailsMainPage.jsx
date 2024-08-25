import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useCourseStore from "../app/courseStore";
import useGetTrekDetailsById from "../hooks/useGetTrekDetailsById";
import useGetTrekDateDetailsById from "../hooks/useGetTrekDateDetailsById";
import ContactUsMainPageBelowSlider from "./ContactUsMainPageBelowSlider";
import TrekDetailsIconSection from "./TrekDetailsIconSection";
import TrekInfoAndDate from "./TrekInfoAndDate";
import TrekDetailsPageSlider from "./TrekDetailsPageSlider";
import InclusionExclusionInfoDetails from "./InclusionExclusionInfoDetails";
import TrekSheduleAndDateDetails from "./TrekSheduleAndDateDetails";

function TrekDetailsMainPage() {
  const { courses, trekDateId } = useCourseStore((state) => ({
    courses: state.courses,
    trekDateId: state.trekDateId,
  }));

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, [courses]);

  const {
    data: trekData = [],
    error: trekError,
    isLoading: isLoadingTrek,
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
    withTravel = [],
    withoutTravel = [],
    allStartDate = {},
    allEndDate = [],
  } = trekDetails;

  const {
    dateid = [],
    date = [],
    withTravel: startDateWithTravel = [],
    withoutTravel: startDateWithoutTravel = [],
  } = allStartDate;

  const {
    trekTimelineDetails = {},
    endDate,
    startDate,
    priceDetails = {},
    dateDifference = [],
  } = trekDateData[0] || {};

  const {
    withTravel: withTravelByDateId = [],
    withoutTravel: withoutTravelByDateId = [],
  } = priceDetails;

  const { scheduleTimeline = [] } = trekTimelineDetails;

  return (
    <div>
      <TrekDetailsPageSlider
        trekName={trekName}
        trekTitle={trekTitle}
        images={images}
        isLoadingDate={isLoadingDate}
        isLoadingTrek={isLoadingTrek}
      />
      <ContactUsMainPageBelowSlider />
      <TrekDetailsIconSection
        suitableForAge={suitableForAge}
        altitude={altitude}
        trekDifficulty={trekDifficulty}
        dateDifference={dateDifference}
        isLoadingDate={isLoadingDate}
        isLoadingTrek={isLoadingTrek}
      />
      <TrekInfoAndDate
        trekName={trekName}
        trekTitle={trekTitle}
        trekLocation={trekLocation}
        trekDescription={trekDescription}
        trekType={trekType}
        trekTypeDescription={trekTypeDescription}
        dateid={dateid}
        date={date}
        startDateWithTravel={startDateWithTravel}
        startDateWithoutTravel={startDateWithoutTravel}
        allEndDate={allEndDate}
        isLoadingDate={isLoadingDate}
        isLoadingTrek={isLoadingTrek}
      />
      <InclusionExclusionInfoDetails
        trekInfo={trekInfo}
        trekInclusions={trekInclusions}
        trekExclusions={trekExclusions}
        trekCancellationPolicy={trekCancellationPolicy}
        trekHighlights={trekHighlights}
        isLoadingDate={isLoadingDate}
        isLoadingTrek={isLoadingTrek}
      />
      <TrekSheduleAndDateDetails
        startDate={startDate}
        endDate={endDate}
        withTravelByDateId={withTravelByDateId}
        withoutTravelByDateId={withoutTravelByDateId}
        scheduleTimeline={scheduleTimeline}
      />
    </div>
  );
}

export default TrekDetailsMainPage;
