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

/** Create card props only for measures that are actually computed in the DB. */
function makeCardInfo(latestYear: number, year: number, dashboardDB: DashboardDB) : AYMeasureCardProps[] {
  const cardPropsList = [];
  for (const measure of Object.values(MeasureType)) {
    if (dashboardDB[measure]) {
      cardPropsList.push(makeCardProps(measure, latestYear, year, dashboardDB));
    }
  }
  return cardPropsList;
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
