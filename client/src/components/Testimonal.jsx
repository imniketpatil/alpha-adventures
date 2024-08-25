import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Testimonial() {
  const testimonialDetails = [
    {
      id: 1,
      imgSrc: "https://i.ibb.co/4g1D9cv/imgslider1.png",
      title: "Some of the best work that was done!",
      content: `Our core values are at the heart of all that we do. They
      are integrated into our daily work lives and help us to
      remember our customers always come first, the last
      thank you should always come from us.`,
      name: "Anna Smith",
      profession: "Senior Web Designer",
    },
    {
      id: 2,
      imgSrc: "https://i.ibb.co/4g1D9cv/imgslider1.png",
      title: "Some of the best work that was done!",
      content: `Our core values are at the heart of all that we do. They
        are integrated into our daily work lives and help us to
        remember our customers always come first, the last
        thank you should always come from us.`,
      name: "Anna Smith",
      profession: "Senior Web Designer",
    },
    {
      id: 3,
      imgSrc: "https://i.ibb.co/4g1D9cv/imgslider1.png",
      title: "Some of the best work that was done!",
      content: `Our core values are at the heart of all that we do. They
        are integrated into our daily work lives and help us to
        remember our customers always come first, the last
        thank you should always come from us.`,
      name: "Anna Smith",
      profession: "Senior Web Designer",
    },
    {
      id: 4,
      imgSrc: "https://i.ibb.co/4g1D9cv/imgslider1.png",
      title: "Some of the best work that was done!",
      content: `Our core values are at the heart of all that we do. They
        are integrated into our daily work lives and help us to
        remember our customers always come first, the last
        thank you should always come from us.`,
      name: "Anna Smith",
      profession: "Senior Web Designer",
    },
    {
      id: 5,
      imgSrc: "https://i.ibb.co/4g1D9cv/imgslider1.png",
      title: "Some of the best work that was done!",
      content: `Our core values are at the heart of all that we do. They
        are integrated into our daily work lives and help us to
        remember our customers always come first, the last
        thank you should always come from us.`,
      name: "Anna Smith",
      profession: "Senior Web Designer",
    },
    // Add more testimonials here
  ];

  return (
    <div className="bg-slate-100 bg-opacity-90 font-body">
      <div className="flex items-center justify-between h-content w-content absolute z-0">
        <div className="w-1/3 bg-white h-full" />
        <div className="w-4/6 ml-16 bg-gray-100 h-full" />
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-30">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={testimonialDetails.length}
        >
          <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
            What Trekkers are
            <br />
            saying
            <br />
            About Us
          </h1>
          <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
            What Trekkers are saying About Us
          </h1>
          <Slider>
            {testimonialDetails.map((testimonial, index) => (
              <Slide index={index} key={testimonial.id} tabIndex="null">
                <div className="flex w-full">
                  <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                      <img
                        src={testimonial.imgSrc}
                        alt="image of profile"
                        className="w-full h-full flex-shrink-0 object-fit object-cover rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="commas"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                          {testimonial.title}
                        </h1>
                        <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                          {testimonial.content}
                        </p>
                      </div>
                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 text-gray-800">
                          {testimonial.name}
                        </p>
                        <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                          {testimonial.profession}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
          <div className="flex items-center mt-8 ">
            <ButtonBack
              className="cursor-pointer "
              role="button"
              aria-label="previous slide"
            >
              <img
                className="h-6 w-6"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                alt="previous"
              />
            </ButtonBack>

            <ButtonNext
              role="button"
              aria-label="next slide"
              className="cursor-pointer ml-2"
            >
              <img
                className="h-12 w-12"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                alt="next"
              />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
