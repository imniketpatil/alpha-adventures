import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, Card, CardContent, Divider, Chip } from "@mui/material";
import DateDropDown from "./DateDropDown";

function TrekTimeLineAndDateDetails({
  withTravel = null,
  withoutTravel = null,
  scheduleTimeline = [],
  allStartDate = [],
}) {
  return (
    <div className="relative mx-auto max-w-[1380px] w-full p-8 rounded-xl mb-6">
      {/* Travel Options */}
      {/* <div className="absolute right-10">
        <DateDropDown allStartDate={allStartDate} />
      </div> */}

      <div className="mb-8 p-4 bg-white shadow-lg rounded-lg">
        <Typography
          variant="h4"
          component="h2"
          className="text-center mb-4 font-bold text-blue-600"
        >
          Travel Options
        </Typography>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* With Travel Option */}
          {withTravel && (
            <Card variant="outlined" className="flex-1">
              <CardContent>
                <Typography variant="h6" component="h3" color="primary">
                  With Travel
                </Typography>
                <Divider className="my-2" />
                <Typography variant="body1" className="mb-2">
                  From: {withTravel.from} to {withTravel.to}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {withTravel.description}
                </Typography>
                <Chip
                  label={`Price: ${withTravel.price}`}
                  color="primary"
                  className="mt-4"
                />
              </CardContent>
            </Card>
          )}

          {/* Without Travel Option */}
          {withoutTravel && (
            <Card variant="outlined" className="flex-1">
              <CardContent>
                <Typography variant="h6" component="h3" color="primary">
                  Without Travel
                </Typography>
                <Divider className="my-2" />
                <Typography variant="body1" className="mb-2">
                  From: {withoutTravel.from} to {withoutTravel.to}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {withoutTravel.description}
                </Typography>
                <Chip
                  label={`Price: ${withoutTravel.price}`}
                  color="secondary"
                  className="mt-4"
                />
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Schedule Timeline */}
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <Typography
          variant="h4"
          component="h2"
          className="text-center mb-4 font-bold text-blue-600"
        >
          Trek Schedule
        </Typography>
        <Timeline position="alternate">
          {scheduleTimeline.length > 0 ? (
            scheduleTimeline.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    color={index % 2 === 0 ? "primary" : "secondary"}
                  />
                  {index < scheduleTimeline.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h3">
                    {item.day}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.time} - {item.work}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))
          ) : (
            <Typography variant="body1" className="text-center">
              No schedule available.
            </Typography>
          )}
        </Timeline>
      </div>
    </div>
  );
}

export default TrekTimeLineAndDateDetails;
