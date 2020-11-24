import React from 'react';
import { Card } from 'semantic-ui-react';
import './AcademicYear.css';

interface AYMeasureProps {
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
        <Card.Meta>{`${year}`}</Card.Meta>
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
    { name: 'Publications', description: 'Publications measures the number of published scholarly works.'},
    { name: 'Graduate Student Support', description: 'Graduate Student Support measures the number of graduate students receiving support in the form of tuition waivers and a monthly stipend.'},
    { name: 'Graduation Rate', description: 'Graduation rate measures the number of students receiving a degree.'},
  ]

  return (
    <Card.Group centered>
      {cardInfo.map((info, index) => <AYMeasure key={index} name={info.name} description={info.description} year={year}/>)}
    </Card.Group>
  );
}

export default AcademicYear;
