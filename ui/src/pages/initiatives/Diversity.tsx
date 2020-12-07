import React from 'react';
import {Container, Grid, Header} from 'semantic-ui-react';
import {TimelinePageDB} from "../../DataTypes";
import InitiativeChart from "../../components/initiative-charts/InitiativeChart"
import InterventionChart from "../../components/initiative-charts/InterventionChart";

/**
 * Diversity Initiative:
 *   Percentage of women and Native Hawaiian graduates.
 *   Percentage of women and Native Hawaiians admitted.
 *   Percentage of women and Native Hawaiians retained.
 *   Time to Degree for women and Native Hawaiians
 *   Exit survey response: 'As a woman, I feel supported in this program.'
 *   Exit survey response: 'As a Native Hawaiian, I feel supported in this program.'
 */

type DiversityPageProps = {
  latestYear: number
  timelinePageDB: TimelinePageDB
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DiversityPage: React.FunctionComponent<DiversityPageProps> = ({latestYear, timelinePageDB}) => {
  const graduates = [
    {name: '2015', women: 17, nativehawaiians: 12},
    {name: '2016', women: 24, nativehawaiians: 10},
    {name: '2017', women: 27, nativehawaiians: 22},
    {name: '2018', women: 37, nativehawaiians: 24},
    {name: '2019', women: 40, nativehawaiians: 28},
  ];
  const admitted = [
    {name: '2015', women: 21, nativehawaiians: 18},
    {name: '2016', women: 34, nativehawaiians: 22},
    {name: '2017', women: 47, nativehawaiians: 24},
    {name: '2018', women: 45, nativehawaiians: 18},
    {name: '2019', women: 57, nativehawaiians: 14},
  ];
  const exitSurvey = [
    {name: '2015', women: 1.4, nativehawaiians: 1.8},
    {name: '2016', women: 1.2, nativehawaiians: 1.2},
    {name: '2017', women: 1.4, nativehawaiians: 1.5},
    {name: '2018', women: 2.5, nativehawaiians: 1.8},
    {name: '2019', women: 3.7, nativehawaiians: 2.4},
  ];

  const interventions = [
    {name: '2015', value: 10, intervention: 'intervention1'},
    {name: '2016', index: 1, value: 10, intervention: 'Established BIPOC student group.'},
    {name: '2017',  value: 12, intervention: 'intervention3'},
    {name: '2018', index: 1, value: 13, intervention: 'Created Dean\'s office position for diversity'},
    {name: '2019',  value: 14, intervention: 'intervention5'},
  ];
  return (
    <Container style={{paddingLeft: '10px', paddingRight: '10px'}}>
      <div>
        <Header as='h2'>Initiative: Increase Diversity</Header>
        <p>The goal of the Diversity initiative is to increase both the numbers and percentage of women and Native Hawaiians graduating from this academic unit. </p>
        <Grid>
          <Grid.Row centered>
            <InitiativeChart title='Graduates (%)' data={graduates} domain={[0,100]} dataKey={['women', 'nativehawaiians']}/>
            <InitiativeChart title='Admitted (%)' data={admitted} domain={[0,100]} dataKey={['women', 'nativehawaiians']}/>
            <InitiativeChart title='Exit Survey Response: As a woman (Native Hawaiian), I felt supported in this program.' data={exitSurvey} domain={[1,5]} dataKey={['women', 'nativehawaiians']} hideXAxis={false}/>
            <InterventionChart title='Interventions' data={interventions}/>
          </Grid.Row>
        </Grid>
      </div>
    </Container>
  );
}

export default DiversityPage;
