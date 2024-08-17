import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function ScheduleTimeline({ scheduleTimeline }) {
  return (
    <Timeline align="alternate">
      {scheduleTimeline.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color={index % 2 === 0 ? "primary" : "secondary"} />
            {index < scheduleTimeline.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>{item}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
