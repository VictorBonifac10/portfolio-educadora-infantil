import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

export const TimelineContainer = styled(VerticalTimeline)`

  &::before {
    background: #f0f0f0ff; //${({ theme }) => theme.purple};
    width: 0.020rem;
  }
`;

export const TimelineElement = styled(VerticalTimelineElement)`

    h3{
      color: #7f7f7fff;
      font-weight: 400;
    }

    h4{
      font-size: 1rem;
      color: ${({ theme }) => theme.purple};
    }

    p{
      font-weight: 300;
    }
`;

