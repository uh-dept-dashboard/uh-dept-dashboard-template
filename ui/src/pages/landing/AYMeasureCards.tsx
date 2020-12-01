import React from 'react';
import { Card } from 'semantic-ui-react';
import './AYMeasureCards.css';
import AYMeasureCard, {AYMeasureCardProps} from "./AYMeasureCard";
import {DashboardDB} from "../../DataTypes";
import {makeSSHCardProps} from "./AYMeasureCardProps";

interface AYMeasureCardsProps {
  year: number,
  dashboardDB: DashboardDB
}

function makeCardInfo(year: number, dashboardDB: DashboardDB) : AYMeasureCardProps[] {
  return [
    makeSSHCardProps(year, dashboardDB),
  ]
}

/** Displays a set of Cards, each containing an AcademicYearMeasure. */
const AYMeasureCards: React.FunctionComponent<AYMeasureCardsProps> = ({ year, dashboardDB }) => {
  const cardInfo = makeCardInfo(year, dashboardDB);
  return (
    <Card.Group centered>
      {cardInfo.map((info, index) => <AYMeasureCard key={index} {...info}/>)}
    </Card.Group>
  );
}

export default AYMeasureCards;
