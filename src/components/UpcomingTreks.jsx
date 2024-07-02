import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import treks from "../db/data";

export default function CircularDemo() {
  const [carouselData, setCarouselData] = useState([]);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    // Transform trek data into carousel-friendly format
    const formattedData = treks.map((trek) => ({
      trekName: trek.trekName,
      trekStartDate: trek.trekStartDate,
      image: `https://www.pexels.com/photo/climbers-exploring-mountain-19664944/`,
    }));
    setCarouselData(formattedData);
  }, []);

  const productTemplate = (trek) => {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="border-1 surface-border border-round m-2 text-center py-5 px-3 w-full">
          <div className="mb-3 w-full">
            <img
              src="https://images.pexels.com/photos/19664944/pexels-photo-19664944/free-photo-of-climbers-exploring-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="error"
              className="shadow-2 object-cover"
            />
          </div>
          <div>
            <h4 className="mb-1">{trek.trekName}</h4>
            <h6 className="mt-0 mb-3">{trek.trekStartDate}</h6>

            <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
              <Button
                icon="pi pi-search"
                className="p-button p-button-rounded"
              />
              <Button
                icon="pi pi-star-fill"
                className="p-button-success p-button-rounded"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center h-content font-body">
      <div className="card w-full max-w-[1024px]">
        <Carousel
          value={carouselData}
          numVisible={3}
          numScroll={2}
          className="custom-carousel"
          responsiveOptions={responsiveOptions}
          circular
          autoplayInterval={8000}
          itemTemplate={productTemplate}
        />
      </div>
    </div>
  );
}
