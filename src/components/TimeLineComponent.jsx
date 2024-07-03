import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

const timelineItems = [
  { time: "09:30 am", content: "Eat" },
  { time: "10:00 am", content: "Code" },
  { time: "12:00 am", content: "Sleep" },
  { time: "9:00 am", content: "Repeat" },
];

export default function TimeLineComponent() {
  return (
    <Timeline position="alternate">
      {timelineItems.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent color="text.secondary">
            {item.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {index < timelineItems.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>{item.content}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
