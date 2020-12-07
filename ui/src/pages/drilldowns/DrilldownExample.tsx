import React from "react";
import {Bar, BarChart, Legend, ReferenceLine, Tooltip, XAxis, YAxis} from "recharts";
import {Container, Grid, Header} from "semantic-ui-react";

const DrilldownExample: React.FunctionComponent = () => {
  const data = [
    {name: 'ICS 190', positive: 2, negative: -24},
    {name: 'ICS 191', positive: 14, negative: -4},
    {name: 'ICS 192', positive: 22, negative: -4},
    {name: 'ICS 290', positive: 3, negative: -24},
    {name: 'ICS 291', positive: 47, negative: -4},
    {name: 'ICS 292', positive: 34, negative: -2},
    {name: 'ICS 390', positive: 12, negative: -4},
    {name: 'ICS 391', positive: 3, negative: -24},
    {name: 'ICS 392', positive: 5, negative: -24},
    {name: 'ICS 490', positive: 32, negative: -2},
    {name: 'ICS 491', positive: 12, negative: -24},
    {name: 'ICS 492', positive: 32, negative: -4},
    {name: 'ICS 493', positive: 22, negative: -4},
    {name: 'ICS 494', positive: 6, negative: -4},
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  const CustomizedAxisTick = ({x = 0, y= 0, payload={}}) => {
    // @ts-ignore
    const val = payload.value;
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-90)">{val}</text>
        </g>
      );
    };

  return (
    <Container style={{paddingLeft: '10px', paddingRight: '10px'}}>
      <div>
        <Header as='h2'>Drilldown: Course Evaluation Response</Header>
        <p>This drilldown shows course-level responses to the question: "This course provided opportunities for me to improve my software development skills." </p>
        <Grid>
          <Grid.Row centered>
            <BarChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis tickCount={14} interval={0} dataKey="name" tick={<CustomizedAxisTick/>}/>
              <YAxis/>
              <Tooltip/>
              <Legend wrapperStyle={{paddingTop: '40px'}}/>
              <ReferenceLine y={0} stroke='#000'/>
              <Bar dataKey="positive" fill="#8884d8"/>
              <Bar dataKey="negative" fill="#82ca9d"/>
            </BarChart>
          </Grid.Row>
        </Grid>
      </div>
    </Container>
  )
}

export default DrilldownExample;