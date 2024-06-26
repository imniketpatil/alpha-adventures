import React, { useEffect, useState } from "react";

const Achievements = () => {
  const achievements = [
    {
      label: "Years of Experience",
      value: 6,
    },
    {
      label: "Happy Trekkers",
      value: 5000,
    },
    {
      label: "Successfully Treks",
      value: 100,
    },
  ];

  const [counters, setCounters] = useState(achievements.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("achievements");
      if (element) {
        const top = element.getBoundingClientRect().top;
        const bottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        // Trigger when the component is within the viewport
        if (top < windowHeight && bottom > 0) {
          const interval = setInterval(() => {
            setCounters((prevCounters) =>
              prevCounters.map((counter, index) =>
                counter < achievements[index].value
                  ? counter + 2
                  : achievements[index].value
              )
            );
          }, 2); // Adjust the interval speed as needed

          // Clear interval when component is out of view
          return () => clearInterval(interval);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [achievements]);

  return (
    <div id="achievements" className="bg-slate-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-lg leading-7 text-gray-600">
                {achievement.label}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {counters[index]}+
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Achievements;
