import React from 'react';
import {Container, Grid, Header} from 'semantic-ui-react';
import {TimelinePageDB} from "../../DataTypes";
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
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
  const data = [
    {name: '2015', uv: 4000, pv: 9000},
    {name: '2016', uv: 3000, pv: 7222},
    {name: '2017', uv: 2000, pv: 6222},
    {name: '2018', uv: 1223, pv: 5400},
    {name: '2019', uv: 1890, pv: 3200},
  ];
  return (
    <Container style={{paddingLeft: '10px', paddingRight: '10px'}}>
      <div>
        <Header as='h2'>Initiative: Diversity</Header>
        <p>The goal of the Diversity initiative is to increase both the numbers and percentage of women graduating from
          this academic unit. </p>
        <Grid>
          <Grid.Row centered>
            <InitiativeChart title='Foo' data={data} dataKey='pv'/>
            <InitiativeChart title='Bar' data={data} dataKey='uv' hideXAxis={false}/>
          </Grid.Row>
        </Grid>
      </div>
    </Container>
  );
}

export default DiversityPage;
