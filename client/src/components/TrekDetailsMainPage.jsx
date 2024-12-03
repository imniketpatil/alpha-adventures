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
import { useNavigate } from "react-router";

function TrekDetailsMainPage() {
  let navigate = useNavigate();

  const { courses, trekDateId } = useCourseStore((state) => ({
    courses: state.courses,
    trekDateId: state.trekDateId,
  }));

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, [courses]);

  if (!courses) {
    navigate("/");
  }
  console.log(courses);

  const {
    data: trekData = [],
    error: trekError,
    isLoading: isLoadingTrek,
  } = useQuery({
    queryKey: ["TrekData", courses],
    queryFn: () => useGetTrekDetailsById({ id: courses }),
    onError: (error) => console.error("Error fetching Trek Details:", error),
  });

  console.log(trekData);

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

  console.log(trekDateData);

  const trekDetails = trekData[0] || {};
  const {
    trekName,
    trekTitle,
    suitableForAge,
    altitude,
    trekLocation,
    trekHighlights,
    trekDescription,
    subDescription,
    trekType = [],
    trekTypeDescription = [],
    trekInfo,
    trekInclusions,
    trekExclusions,
    trekCancellationPolicy,
    trekDifficulty,
    images,
    allStartDate = {},
    allEndDate = [],
  } = trekDetails;

  console.log(trekDetails);

  const {
    dateid = [],
    date = [],
    availablity = [],
    trekDateOffer,
    withTravel: startDateWithTravel = [],
    withoutTravel: startDateWithoutTravel = [],
  } = allStartDate;

  console.log(trekDateOffer);

  const {
    trekTimelineDetails = {},
    endDate,
    startDate,

    priceDetails = {},
    dateDifference = [],
  } = trekDateData[0] || {};

  const { withTravel: withTravel = [], withoutTravel: withoutTravel = [] } =
    priceDetails;

  // console.log(withTravel);
  // console.log(withoutTravel);

  const { scheduleTimeline = [] } = trekTimelineDetails;

  // console.log("trekDateData", trekDateData);

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
        subDescription={subDescription}
        trekType={trekType}
        trekTypeDescription={trekTypeDescription}
        dateid={dateid}
        date={date}
        trekDateOffer={trekDateOffer}
        availablity={availablity}
        startDateWithTravel={startDateWithTravel}
        startDateWithoutTravel={startDateWithoutTravel}
        allEndDate={allEndDate}
        withTravel={withTravel}
        withoutTravel={withoutTravel}
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
        trekDateData={trekDateData}
        scheduleTimeline={scheduleTimeline}
      />
    </div>
  );
}

export default TrekDetailsMainPage;
