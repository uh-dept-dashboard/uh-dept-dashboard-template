import React from 'react';
import { Card } from 'semantic-ui-react';
import './AYMeasureCards.css';

interface AcademicYearMeasureProps {
  name: string,
  description: string,
  year: number
}

const AYMeasureCard: React.FunctionComponent<AcademicYearMeasureProps> = ({name, description, year}) => {
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
