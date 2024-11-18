import React from "react";
import Header from "../components/Header";
import TempSpace from "../components/TempSpace";
import Footer from "../components/Footer";
import TrekTypeTreksComponent from "../components/TrekTypeTreksComponent";
import useGetTreksForTrekTypeById from "../hooks/useGetTreksForTrekTypeById";
import useCourseStore from "../app/courseStore";
import { useQuery } from "@tanstack/react-query";

function TrekTypeTreksPage() {
  const { trekTypeId } = useCourseStore((state) => ({
    trekTypeId: state.trekTypeId,
  }));

  // console.log(trekTypeId);

  const {
    data: treksBasedOnTrekType = [],
    error: dateError,
    isLoading: isLoadingDate,
  } = useQuery({
    queryKey: ["treksBasedOnTrekType", trekTypeId],
    queryFn: () => useGetTreksForTrekTypeById({ id: trekTypeId }),
    onError: (error) =>
      console.error("Error fetching Trek Date Details:", error),
  });

  // console.log(treksBasedOnTrekType);

  return (
    <>
      <Header type="list" />
      <TempSpace />
      <TrekTypeTreksComponent treksBasedOnTrekType={treksBasedOnTrekType} />
      <Footer />
    </>
  );
}

export default TrekTypeTreksPage;
