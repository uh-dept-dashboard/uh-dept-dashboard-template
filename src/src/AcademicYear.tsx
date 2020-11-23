import React from 'react';
import { Card } from 'semantic-ui-react';

type AYMeasureProps = {
  name: string,
  description: string,
  year: number
}

const AYMeasure: React.FunctionComponent<AYMeasureProps> = ({name, description, year}) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{description}</Card.Description>
        <Card.Meta>{year}</Card.Meta>
      </Card.Content>
    </Card>
  )
}

type AcademicYearProps =  {
  year: number
}

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
const AcademicYear: React.FunctionComponent<AcademicYearProps> = ({ year }) => {
  const cardInfo = [
    { name: 'SSH', description: 'Student Semester Hours is a measure of the study body provided instruction'},
    { name: 'Faculty FTE', description: 'Faculty FTE measures the number of faculty available for teaching, research and service'},
    { name: 'Extramural Funding', description: 'Extramurual funding measures the dollar amount of fundng brought in by faculty to this academic unit (or the University as a whole)'},
    { name: 'Retention', description: 'Retention measures the percentage of students entering the academic program who receive a degree in it.'},
  ]

  return (
    <Card.Group centered>
      {cardInfo.map(info => <AYMeasure name={info.name} description={info.description} year={year}/>)}
    </Card.Group>
  );
}

export default AcademicYear;
