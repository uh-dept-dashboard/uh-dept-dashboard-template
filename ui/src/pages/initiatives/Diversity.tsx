import React from 'react';
import {Container, Grid, Header} from 'semantic-ui-react';
import {TimelinePageDB} from "../../DataTypes";
import InitiativeChart from "./InitiativeChart";

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
    {name: '2015', women: 37, nativehawaiians: 12},
    {name: '2016', women: 47, nativehawaiians: 22},
    {name: '2017', women: 57, nativehawaiians: 42},
    {name: '2018', women: 67, nativehawaiians: 32},
    {name: '2019', women: 77, nativehawaiians: 52},
  ];
  const admitted = [
    {name: '2015', women: 67, nativehawaiians: 18},
    {name: '2016', women: 77, nativehawaiians: 22},
    {name: '2017', women: 57, nativehawaiians: 24},
    {name: '2018', women: 87, nativehawaiians: 44},
    {name: '2019', women: 67, nativehawaiians: 33},
  ];
  return (
    <Container style={{paddingLeft: '10px', paddingRight: '10px'}}>
      <div>
        <Header as='h2'>Initiative: Diversity</Header>
        <p>The goal of the Diversity initiative is to increase both the numbers and percentage of women graduating from
          this academic unit. </p>
        <Grid>
          <Grid.Row centered>
            <InitiativeChart title='% Graduates' data={graduates} domain={[0,100]} dataKey={['women', 'nativehawaiians']}/>
            <InitiativeChart title='% Admitted' data={admitted} domain={[0,100]} dataKey={['women', 'nativehawaiians']}/>
          </Grid.Row>
        </Grid>
      </div>
    </Container>
  );
}

export default DiversityPage;
