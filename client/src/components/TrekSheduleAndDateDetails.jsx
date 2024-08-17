import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

// Custom styled components
const StyledCard = styled(Card)(({ theme }) => ({
  flex: 1,
  background: "linear-gradient(135deg, #f0f4ff, #e0e8ff)",
  boxShadow: theme.shadows[3],
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[5],
  },
}));

const StyledTimelineItem = styled(TimelineItem)(({ theme }) => ({
  "&:before": {
    flex: 0,
    padding: 0,
  },
  "& .MuiTimelineDot-outlined": {
    borderColor: theme.palette.primary.main,
  },
}));

const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
  backgroundColor: "#f7f9ff",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[1],
}));

function TrekSheduleAndDateDetails({
  withTravel = {},
  withoutTravel = {},
  scheduleTimeline = [],
  allStartDate = [],
}) {
  return (
    <div className="relative mx-auto max-w-[1380px] w-full p-8 rounded-xl mb-6">
      {/* Travel Options */}
      <Box
        className="mb-8 p-4 rounded-lg"
        sx={{
          background: "linear-gradient(135deg, #e8f0ff, #d0e4ff)",
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          className="text-center mb-4 font-bold text-blue-600"
          sx={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          Travel Options
        </Typography>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* With Travel Option */}
          {withTravel.from && (
            <StyledCard variant="outlined">
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
            </StyledCard>
          )}

          {/* Without Travel Option */}
          {withoutTravel.from && (
            <StyledCard variant="outlined">
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
            </StyledCard>
          )}
        </div>
      </Box>

      {/* Schedule Timeline */}
      <Box
        className="p-4 rounded-lg"
        sx={{
          background: "linear-gradient(135deg, #f7faff, #e0f0ff)",
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          className="text-center mb-4 font-bold text-blue-600"
          sx={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          Trek Schedule
        </Typography>
        <Timeline position="alternate">
          {scheduleTimeline.length > 0 ? (
            scheduleTimeline.map((item, index) => (
              <StyledTimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    color={index % 2 === 0 ? "primary" : "secondary"}
                  />
                  {index < scheduleTimeline.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <StyledTimelineContent>
                  <Typography variant="h6" component="h3">
                    {item.day}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.time} - {item.work}
                  </Typography>
                </StyledTimelineContent>
              </StyledTimelineItem>
            ))
          ) : (
            <Typography variant="body1" className="text-center">
              No schedule available.
            </Typography>
          )}
        </Timeline>
      </Box>
    </div>
  );
}

export default TrekSheduleAndDateDetails;
