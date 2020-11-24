import React from 'react';
import { Card } from 'semantic-ui-react';

interface AcademicYearMeasureProps {
  name: string,
  description: string,
  year: number
}

const AcademicYearMeasure: React.FunctionComponent<AcademicYearMeasureProps> = ({name, description, year}) => {
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


export default AcademicYearMeasure;
