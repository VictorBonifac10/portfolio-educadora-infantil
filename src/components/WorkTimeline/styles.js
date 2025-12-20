import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";

const green = "#63C27D";
const greenLight = "#E8F6EE";
const textLight = "#9E9E9E";

export const TimelineWrapper = styled(Timeline)`
 position: relative;
  padding: 0;

  /* Linha central contínua */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    background-color: ${green};
    z-index: 0;
  }
    `;

export const StyledTimelineItem = styled(TimelineItem)`
`;

export const StyledOppositeContent = styled(TimelineOppositeContent)`
  color: ${green};
  font-weight: 600;
  font-size: 0.9rem;
`;

export const StyledSeparator = styled(TimelineSeparator)`
  position: relative;
`;

export const StyledDot = styled(TimelineDot)`
  background-color: ${green};
  color: white;
  box-shadow: 0 0 0 6px ${greenLight};
  margin: 8px 0;
z-index: 2;

  i {
    font-size: 1.1rem;
  }
`;

export const StyledContent = styled(TimelineContent)`
  background: transparent;
  padding: 0.5rem 1rem;
  transition: transform 0.3s ease;

&:hover {
    transform: translateX(6px);
  }

  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: ${green};
  }

  h5 {
    margin: 4px 0;
    font-size: 0.9rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: ${textLight};
    line-height: 1.4;
  }
`;
