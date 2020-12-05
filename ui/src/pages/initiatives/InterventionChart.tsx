import {CartesianGrid, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis} from "recharts";
import React from "react";
import {Header} from "semantic-ui-react";
import {theme} from '../../Theme';

type InterventionChartProps = {
  data: any,
  title: string,
}

const InterventionChart: React.FunctionComponent<InterventionChartProps> = ({data, title}) => {
  const green = theme.color.green;
  return (
    <div>
      <Header textAlign='center' as='h4'>{title}</Header>
      <ScatterChart width={600} height={200} syncId="anyId" margin={{top: 0, right: 10, left: 0, bottom: 10}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Scatter data={data} fill={green}/>
        <XAxis type='category' dataKey='name'/>
        <YAxis type='category' dataKey='value'/>
        <ZAxis type='category' dataKey='intervention'/>
      </ScatterChart>
    </div>
  )
}

export default InterventionChart;