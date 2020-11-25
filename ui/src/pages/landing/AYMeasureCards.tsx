import React from 'react';
import { Card } from 'semantic-ui-react';
import './AYMeasureCards.css';
import AYMeasureCard from "./AYMeasureCard";
import { Units } from '../../Theme';

interface AYMeasureCardsProps {
  year: number
}

/** Displays a set of Cards, each containing an AcademicYearMeasure. */
const AYMeasureCards: React.FunctionComponent<AYMeasureCardsProps> = ({ year }) => {
  const makeDelta = () => Math.floor(Math.random() * 101) - 50;
  const cardInfo = [
    {
      name: 'SSH',
      value: 20123,
      description: 'Student Semester Hours is a measure of the study body provided instruction',
      priorDelta: makeDelta(),
      nextDelta: makeDelta()
    },
    {
      name: 'Faculty FTE',
      value: 18,
      description: 'Faculty FTE measures the number of faculty available for teaching, research and service',
      priorDelta: makeDelta(),
      nextDelta: makeDelta()
    },
    {
      name: 'Extramural Funding',
      value: 2450346,
      description: 'Extramural funding measures the dollar amount of funding brought in by faculty to this academic unit (or the University as a whole)',
      priorDelta: makeDelta(),
      nextDelta: makeDelta(),
      unit: Units.Dollars
    },
    {
      name: 'Retention',
      value: 34,
      description: 'Retention measures the percentage of students entering the academic program who receive a degree in it.',
      priorDelta: makeDelta(),
      nextDelta: makeDelta(),
      unit: Units.Percent
    },
    {
      name: 'Publications',
      value: 67,
      description: 'Publications measures the number of published scholarly works.',
      priorDelta: makeDelta(),
      nextDelta: makeDelta()
    },
    {
      name: 'Graduate Student Support FTE',
      value: 47.5,
      description: 'Graduate Student Support FTE measures the number of graduate students receiving support in the form of tuition waivers and a monthly stipend.',
      priorDelta: makeDelta(),
      nextDelta: makeDelta()
    },
    {
      name: 'Graduates',
      value: 168,
      description: 'Graduates measures the number of students receiving a degree.',
      priorDelta: makeDelta(),
      nextDelta: makeDelta()
    },
  ]

  return (
    <Card.Group centered>
      {cardInfo.map((info, index) => <AYMeasureCard year={year} key={index} {...info}/>)}
    </Card.Group>
  );
}

export default AYMeasureCards;
