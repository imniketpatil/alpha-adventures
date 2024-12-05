import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

import useGetTrekDetailsById from "../hooks/useGetTrekDetailsById";
import ContactUsMainPageBelowSlider from "./ContactUsMainPageBelowSlider";
import TrekDetailsIconSection from "./TrekDetailsIconSection";
import TrekInfoAndDate from "./TrekInfoAndDate";
import TrekDetailsPageSlider from "./TrekDetailsPageSlider";
import InclusionExclusionInfoDetails from "./InclusionExclusionInfoDetails";
import TrekSheduleAndDateDetails from "./TrekSheduleAndDateDetails";
import LoadingSpinner from "./LoadingSpinner";

function TrekDetailsMainPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const trekId = searchParams.get("trekId");
  const trekDateId = searchParams.get("trekDateId");

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Fetch Trek Details using React Query
  const {
    data: mainData = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["TrekData", trekId, trekDateId],
    queryFn: () => useGetTrekDetailsById({ trekId, trekDateId }),
    onError: (err) => console.error("Error fetching Trek Details:", err),
    enabled: Boolean(trekId), // Ensure query only runs if trekId is present
  });

  // Destructure fetched data
  const trekDetails = mainData.trekData || {};
  const trekDateDetails = mainData.trekDateData || {};

  // console.log(trekDateDetails);

  const {
    trekName = "",
    trekTitle = "",
    suitableForAge = "",
    altitude = "",
    trekLocation = "",
    trekHighlights = [],
    trekDescription = "",
    subDescription = "",
    trekType = [],
    trekTypeDescription = [],
    trekInfo = "",
    trekInclusions = [],
    trekExclusions = [],
    trekCancellationPolicy = "",
    trekDifficulty = "",
    images = [],
    trekOffer,
    dateDetails,
  } = trekDetails;

  const { dateid, date, endDate, availablity, trekDateOffer } =
    dateDetails?.[0] || {};

  const { trekTimelineDetails, priceDetails = {} } = trekDateDetails;

  // console.log(trekTimelineDetails);

  const { withTravel = [], withoutTravel = [] } = priceDetails;

  const trekDateData = [...withTravel, ...withoutTravel];

  // console.log(trekDateData);

  // console.log(withTravel);
  // console.log(withoutTravel);

  if (error) {
    navigate("/");
  }

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Trek Slider */}
      <TrekDetailsPageSlider
        trekName={trekName}
        trekTitle={trekTitle}
        images={images}
        isLoading={isLoading}
      />

      {/* Contact Us Section */}
      <ContactUsMainPageBelowSlider />

      {/* Icon Section */}
      <TrekDetailsIconSection
        suitableForAge={suitableForAge}
        altitude={altitude}
        trekDifficulty={trekDifficulty}
        isLoading={isLoading}
      />

      {/* Trek Info and Dates */}
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
        endDate={endDate}
        trekDateOffer={trekDateOffer}
        availablity={availablity}
        withTravel={withTravel}
        withoutTravel={withoutTravel}
        isLoading={isLoading}
      />

      {/* Inclusion and Exclusion */}
      <InclusionExclusionInfoDetails
        trekInfo={trekInfo}
        trekInclusions={trekInclusions}
        trekExclusions={trekExclusions}
        trekCancellationPolicy={trekCancellationPolicy}
        trekHighlights={trekHighlights}
        isLoading={isLoading}
      />

      {/* Schedule and Date Details */}
      <TrekSheduleAndDateDetails
        withTravel={withTravel}
        withoutTravel={withoutTravel}
        // trekDateData={trekDateData}
        scheduleTimeline={trekTimelineDetails.scheduleTimeline || []}
        isLoading={isLoading}
      />
    </div>
  );
}

export default TrekDetailsMainPage;
