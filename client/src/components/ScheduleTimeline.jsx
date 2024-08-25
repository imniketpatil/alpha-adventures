import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ScheduleTimeline({ scheduleTimeline }) {
  return (
    <Timeline position="alternate">
      {scheduleTimeline.map((item) => (
        <TimelineItem key={item._id}>
          <TimelineSeparator>
            <TimelineDot color="primary" sx={{ alignItems: "center" }} />
            {item._id !== scheduleTimeline[scheduleTimeline.length - 1]._id && (
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
  );
}
