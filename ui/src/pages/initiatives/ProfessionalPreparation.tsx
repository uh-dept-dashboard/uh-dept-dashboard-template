import React from 'react';
import {Container, Grid, Header} from 'semantic-ui-react';
import {TimelinePageDB} from "../../DataTypes";
import InitiativeChart from "../../components/initiative-charts/InitiativeChart"
import InterventionChart from "../../components/initiative-charts/InterventionChart";

/**
 * Professional Preparation Initiative:
 *   stakeholder survey, exit survey, course evaluation survey
 */

type ProfessionalPreparationPageProps = {
  latestYear: number
  timelinePageDB: TimelinePageDB
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProfessionalPreparationPage: React.FunctionComponent<ProfessionalPreparationPageProps> = ({latestYear, timelinePageDB}) => {
  const exitSurvey = [
    {name: '2015', preparation: 1.7},
    {name: '2016', preparation: 1.4},
    {name: '2017', preparation: 2.7},
    {name: '2018', preparation: 1.4},
    {name: '2019', preparation: 3.0},
  ];

  const stakeholderSurvey = [
    {name: '2015', preparation: 2.7},
    {name: '2016', preparation: 2.4},
    {name: '2017', preparation: 2.7},
    {name: '2018', preparation: 3.4},
    {name: '2019', preparation: 3.5},
  ];

  const courseEvaluationResponse = [
    {name: '2015', programming: 20},
    {name: '2016', programming: 22},
    {name: '2017', programming: 40},
    {name: '2018', programming: 60},
    {name: '2019', programming: 85},
  ];

  const interventions = [
    {name: '2015', value: 10, intervention: 'intervention1'},
    {name: '2016', index: 1, value: 10, intervention: 'Annual review of courses for programming projects.'},
    {name: '2017',  value: 12, intervention: 'intervention3'},
    {name: '2018', index: 1, value: 13, intervention: 'Established capstone project'},
    {name: '2019',  value: 14, intervention: 'intervention5'},
  ];
  return (
    <Container style={{paddingLeft: '10px', paddingRight: '10px'}}>
      <div>
        <Header as='h2'>Initiative: Improve Professional Preparation</Header>
        <p>The goal of the Professional Preparation initiative is to increase the professional preparation of graduates from this academic unit.</p>
        <Grid>
          <Grid.Row centered>
            <InitiativeChart title='Exit Survey: My undergraduate program prepared me for my professional career' data={exitSurvey} domain={[1,5]} dataKey={['preparation']} />
            <InitiativeChart title='Stakeholder Survey: ICS undergraduates are well prepared for positions in my company.' data={stakeholderSurvey} domain={[1,5]} dataKey={['preparation']}/>
            <InitiativeChart title='Course Evaluation Response: This class improved my software development skills. (%)' data={courseEvaluationResponse} domain={[0,100]} dataKey={['programming']} />
            <InterventionChart title='Interventions' data={interventions}/>
          </Grid.Row>
        </Grid>
      </div>
    </Container>
  );
}

export default ProfessionalPreparationPage;
