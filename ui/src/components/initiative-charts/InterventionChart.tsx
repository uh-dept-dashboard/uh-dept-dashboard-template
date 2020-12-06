import {Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";
import {Header} from "semantic-ui-react";
import {theme} from '../../Theme';

function InterventionChartTooltip({ payload, active }:any) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload && payload[0] && payload[0].payload.intervention}`}</p>
      </div>
    );
  }

  return null;
}

type InterventionChartProps = {
  data: any,
  title: string,
}

const InterventionChart: React.FunctionComponent<InterventionChartProps> = ({data, title}) => {
  const green = theme.color.green;
  return (
    <div>
      <Header textAlign='center' as='h4'>{title}</Header>
      <LineChart width={600} height={200} data={data} syncId="anyId" margin={{top: 0, right: 10, left: 0, bottom: 10}}>
        <YAxis domain={[0, 2]} interval={-1}/>
        <Tooltip content={<InterventionChartTooltip />}/>
        <Line type='monotone' dataKey='index' stroke={green} fill={green}/>
        <XAxis dataKey="name"/>
      </LineChart>
    </div>
  )
}

export default InterventionChart;