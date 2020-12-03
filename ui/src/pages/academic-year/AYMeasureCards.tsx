import React from 'react';
import { Card } from 'semantic-ui-react';
import './AYMeasureCards.css';
import AYMeasureCard, {AYMeasureCardProps} from "./AYMeasureCard";
import {AYPageDB, MeasureType} from "../../DataTypes";
import {makeCardProps} from "./AYMeasureCardProps";

interface AYMeasureCardsProps {
  latestYear: number,
  year: number,
  ayPageDB: AYPageDB
}

/** Create card props only for measures that are actually computed in the DB. */
function makeCardInfo(latestYear: number, year: number, ayPageDB: AYPageDB) : AYMeasureCardProps[] {
  const cardPropsList = [];
  for (const measure of Object.values(MeasureType)) {
    if (ayPageDB[measure]) {
      cardPropsList.push(makeCardProps(measure, latestYear, year, ayPageDB));
    }
  }
  return cardPropsList;
}

/** Displays a set of Cards, each containing an AcademicYearMeasure. */
const AYMeasureCards: React.FunctionComponent<AYMeasureCardsProps> = ({ latestYear, year, ayPageDB }) => {
  const cardInfo = makeCardInfo(latestYear, year, ayPageDB);
  return (
    <Card.Group centered>
      {cardInfo.map((info, index) => <AYMeasureCard key={index}  {...info}/>)}
    </Card.Group>
  );
}

export default AYMeasureCards;
