import React from 'react';
import { Card } from 'semantic-ui-react';
import './AYMeasureCards.css';

interface AYMeasureCardProps {
  name: string,
  description: string,
  year: number,
  value: number,
  priorDelta?: number,
  nextDelta?: number,
  sparks?: Array<Record<string, unknown>>

}

const AYMeasureCard: React.FunctionComponent<AYMeasureCardProps> = ({name, description, year}) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{description}</Card.Description>
        <Card.Meta>{`${year}`}</Card.Meta>
      </Card.Content>
    </Card>
  )
}


export default AYMeasureCard;
