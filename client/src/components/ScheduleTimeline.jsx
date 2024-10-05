import React, { useRef, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export default function ScheduleTimeline({ scheduleTimeline }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        style={{
          maxHeight: isExpanded ? "none" : "150px",
          overflow: "hidden",
          position: "relative",
          transition: "max-height 0.3s ease",
        }}
      >
        <Timeline position="alternate">
          {scheduleTimeline.map((item) => (
            <TimelineItem key={item._id}>
              <TimelineSeparator>
                <TimelineDot color="primary" sx={{ alignItems: "center" }} />
                {item._id !==
                  scheduleTimeline[scheduleTimeline.length - 1]._id && (
                  <TimelineConnector />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    py: 3, // Default padding
                    borderRadius: 2,
                    display: "inline-block",
                    maxWidth: "300px",
                    "@media (max-width: 600px)": {
                      p: 0, // Set padding to 0 for screens smaller than 600px
                    },
                    "@media (min-width: 600px)": {
                      maxWidth: "none",
                    },
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" component="p" className="text-sm">
                    <span className=" text-sm md:text-xl font-bold text-gray-800">
                      {item.day}
                    </span>
                  </Typography>
                  <Typography variant="body2" className="text-sm">
                    <span className="text-sm md:text-lg font-medium text-gray-700">
                      {item.time}
                    </span>
                  </Typography>
                  <Typography variant="body1" className="text-sm">
                    <span className="text-sm md:text-lg"> {item.work}</span>
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        {!isExpanded && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "80px",
              background:
                "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))", // Change 'rgba(255, 255, 255, 1)' to your background color
              pointerEvents: "none",
            }}
          />
        )}
      </div>
      <div className="flex flex-col items-center mt-2">
        <button
          onClick={() => {
            toggleExpand();
            setIsHovered(false);
          }}
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isExpanded ? (
            <>
              <KeyboardDoubleArrowUpIcon
                fontSize="large"
                style={{
                  transition: "transform 0.5s, opacity 0.5s",
                  transform: isHovered ? "scale(1.2)" : "scale(1)",
                  color: isHovered ? "black" : "gray",
                }}
              />
              {isHovered && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    padding: "5px 10px",
                    borderRadius: "3px",
                    fontSize: "0.9rem",
                    transition: "opacity 0.5s",
                    opacity: isHovered ? 1 : 0,
                  }}
                >
                  Read Less
                </span>
              )}
            </>
          ) : (
            <>
              <KeyboardDoubleArrowDownIcon
                fontSize="large"
                style={{
                  transition: "transform 0.5s, opacity 0.5s",
                  transform: isHovered ? "scale(1.2)" : "scale(1)",
                  color: isHovered ? "black" : "gray",
                }}
              />
              {isHovered && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    padding: "5px 10px",
                    borderRadius: "3px",
                    fontSize: "0.9rem",
                    transition: "opacity 0.5s",
                    opacity: isHovered ? 1 : 0,
                  }}
                >
                  Read More
                </span>
              )}
            </>
          )}
        </button>
      </div>
    </>
  );
}
