import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How to Book a Trek/Trip with Us?",
      answer: (
        <>
          <strong>
            Booking a trek or trip with Alpha Adventures is simple and
            straightforward. <br />
            Follow these steps to secure your spot on an unforgettable
            adventure:
          </strong>
          <br />
          <br />
          <strong>1. Choose a Trek/Trip: </strong>
          Select the trek or trip that excites you from our offerings.
          <br />
          <br />
          <strong>2. Select the Batch Dates:</strong> Choose the batch dates
          that fit your schedule. <br />
          <br />
          <strong>3. Consult with Our Destination Experts: </strong>Discuss any
          questions or concerns with our experts to ensure you're fully
          prepared. <br />
          <br />
          <strong>4. Complete the Payment Process:</strong> Finalize your
          booking by completing the payment. <br />
          <br />
          <strong>5. Receive Email Confirmation: </strong>After payment, you'll
          receive an email confirmation with all the details.
        </>
      ),
    },
    {
      question: "What Are the Inclusions in the Fees?",
      answer: (
        <>
          <strong>
            Each trek/trip is designed uniquely and may include different
            components in the fees. Generally, your trek/trip cost includes:
          </strong>
          <br />
          <br />
          <strong>1. Train and Local Travel: </strong>Travel from specific
          locations, depending on availability.
          <br />
          <br />
          <strong>2. Accommodation:</strong> Comfortable stays in tents,
          homestays, or hotels. <br />
          <br />
          <strong>3. All Meals: </strong>Simple, nutritious, and vegetarian
          meals throughout the trek/trip. <br />
          <br />
          <strong>4. Expert Trek Leaders and Support Team:</strong> Experienced
          guides and support staff to enhance your experience. <br />
          <br />
          <strong>5. Trekking and Safety Equipment: </strong>
          Essential gear for a safe and enjoyable trek. <br />
          <br />
          <strong>6. Permits and Entry Fees: </strong>
          All necessary permits and entry fees are covered.
        </>
      ),
      icon: KeyboardArrowDownOutlinedIcon,
    },
    {
      question: "What Are the Exclusions?",
      answer: (
        <>
          <strong>
            The following are generally not included in the trek/trip fees:
          </strong>
          <br />
          <br />
          <strong>1. Meals During Transit:</strong> Meals while traveling to the
          trek's starting point. <br />
          <br />
          <strong>2. Cost of Adventure Activities:</strong> Additional
          activities like rappelling, ziplining, or water sports. <br />
          <br />
          <strong>3. Personal Travel Accessories:</strong> Items like backpacks,
          shoes, and clothing.
        </>
      ),
    },
    {
      question: "Do You Offer Any Discounts?",
      answer:
        "We typically do not offer discounts or promotions. However, if your group size exceeds 10 people, you can discuss potential discounts with our destination experts.",
    },
    {
      question: "I Paid But Didn’t Receive a Confirmation",
      answer:
        "If you've made a payment but haven't received a confirmation email, please contact our destination experts via call or WhatsApp. They will quickly resolve any issues and ensure your booking is confirmed.",
    },
    {
      question: "Can I Pay an Advance Amount to Book a Trek/Trip?",
      answer:
        "Yes, you can secure your booking by paying a specific advance amount. This amount will reserve your slot for the trek/trip.",
    },
    {
      question: "Can I Join Solo?",
      answer:
        "Absolutely! Traveling solo with Alpha Adventures offers a unique opportunity for self-discovery, making new friends, and connecting with nature. Our trek leaders and tour managers will ensure you feel included and never left out of the group.",
    },
    {
      question: "Are Your Treks/Trips Safe for Women?",
      answer: (
        <>
          <strong>
            Women's safety is of utmost importance to us at Alpha Adventures. We
            take several steps to ensure the safety of our female trekkers:
          </strong>
          <br />
          <br />
          <strong>1. Pre-Trek WhatsApp Group: </strong> Before the trek begins,
          we create a WhatsApp group for all registered participants, allowing
          everyone to get acquainted even before meeting in person. <br />{" "}
          <br />
          <strong>2. Separate Accommodations: </strong>Male and female trekkers
          stay in separate rooms or tents to ensure comfort and privacy. <br />
          <br />
          <strong>3. Inquiries About Group Composition: </strong>
          If you're concerned about the number of female participants in the
          group, you can ask our destination expert for details. If you're
          uncomfortable, you can switch to another group or upcoming trek/trip.{" "}
          <br />
          <br />
          <strong>4. Professional Trek Leaders: </strong> While we do not
          guarantee a female trek leader, all our trek leaders are trained in
          professional and appropriate behavior. We have a feedback mechanism
          and over-the-call support to address any concerns. <br />
          <br />
          <strong>5. Sharing Contact Information: </strong>
          You can share the contact details of your destination expert or trek
          leader with your family members. They can communicate your whereabouts
          and act as a communication bridge in case of an emergency.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 md:mt-20 py-12 px-4 font-body">
        <h1 className="text-center  lg:text-3xl text-2xl lg:leading-9 leading-7 text-gray-800 font-semibold">
          FAQ's
        </h1>

        <div className="lg:mt-12 bg-gray-100 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
          <div className="flex justify-between md:flex-row flex-col">
            <div className="md:mb-0 mb-8 md:text-left text-center">
              <h2 className="font-medium  text-lg leading-5 text-gray-800 lg:mb-2 mb-4">
                Questions
              </h2>
              <p className="font-normal text-sm lg:text-md leading-5 text-gray-600 md:w-full md:ml-0 w-11/12 mx-auto md:font-semibold ">
                If you don’t find your answer,
                <br /> Please contact us, <br />
                We’ll be more than happy to assist you.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-slate-200 md:justify-center justify-center items-center px-4 py-3 w-full ">
                <a
                  href="https://wa.me/919403110937?text=Hey%21%20We%20are%20Alpha%20Adventures%2C%20your%20adventure%20travel%20partner.%20How%20can%20we%20assist%20you%3F"
                  target="_black"
                  className=" outline-none relative inline-flex items-center justify-center leading-normal no-underline  py-2 pr-4 pl-3  text-slate-700 font-sans font-bold text-sm uppercase hover:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group lg:text-md"
                >
                  Get In Touch
                  <svg
                    className="icon icon-tabler icon-tabler-arrow-up-right"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 7l-10 10"></path>
                    <path d="M8 7l9 0l0 9"></path>
                  </svg>
                  <span className=" outline-none absolute bottom-0 left-0 w-full h-0.5 bg-neutral-700 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-8/12 w-full mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} onClick={() => toggleFAQ(index)}>
              <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

              <div className="w-full md:px-6 hover:cursor-pointer">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="flex justify-center items-center  font-medium text-md lg:text-lg leading-6 text-gray-800">
                      <span className="lg:mr-6 mr-4 lg:text-xl md:text-lg text-md leading-6 font-semibold text-gray-800">
                        Q{index + 1}.
                      </span>
                      {faq.question}
                    </p>
                  </div>
                  <button
                    aria-label="toggler"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    onClick={() => toggleFAQ(index)}
                  >
                    <KeyboardArrowDownOutlinedIcon
                      className={`h-6 w-6 text-slate-900 transform transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div
                  className={`faq-answer ${
                    activeIndex === index ? "open" : ""
                  } mt-6 w-full`}
                >
                  <p className="text-md lg:text-lg leading-6 text-gray-600 font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <hr className="w-full lg:mt-10 my-8" />
        </div>
      </div>
    </>
  );
};

export default FAQ;
