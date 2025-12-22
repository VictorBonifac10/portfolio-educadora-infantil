import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

export const TimelineContainer = styled(VerticalTimeline)`

  &::before {
    background: ${({ theme }) => theme.purple};
    width: 0.020rem;
  }
`;

export const TimelineElement = styled(VerticalTimelineElement)`

    h4{
      font-size: 1rem;
      color: ${({ theme }) => theme.purple};
    }
`;

