import React from 'react';
import { Card } from 'semantic-ui-react';
import './AYMeasureCards.css';
import AYMeasureCard, {AYMeasureCardProps} from "./AYMeasureCard";
import {DashboardDB, MeasureType} from "../../DataTypes";
import {makeCardProps} from "./AYMeasureCardProps";

interface AYMeasureCardsProps {
  latestYear: number,
  year: number,
  dashboardDB: DashboardDB
}

function makeCardInfo(latestYear: number, year: number, dashboardDB: DashboardDB) : AYMeasureCardProps[] {
  return [
    makeCardProps(MeasureType.SSH, latestYear, year, dashboardDB),
  ]
}

/** Displays a set of Cards, each containing an AcademicYearMeasure. */
const AYMeasureCards: React.FunctionComponent<AYMeasureCardsProps> = ({ latestYear, year, dashboardDB }) => {
  const cardInfo = makeCardInfo(latestYear, year, dashboardDB);
  return (
    <Card.Group centered>
      {cardInfo.map((info, index) => <AYMeasureCard key={index}  {...info}/>)}
    </Card.Group>
  );
}

export default AYMeasureCards;
