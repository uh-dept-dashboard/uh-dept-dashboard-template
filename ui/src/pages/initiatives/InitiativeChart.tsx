import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";
import {Header} from "semantic-ui-react";
import {theme} from '../../Theme';

type InitiativeChartProps = {
  data: any,
  title: string,
  dataKey: string[],
  hideXAxis?: boolean
  domain?: any
}

const InitiativeChart: React.FunctionComponent<InitiativeChartProps> = ({data, dataKey, hideXAxis = true, domain = [0, 'auto'], title}) => {
  const green = theme.color.green;
  const purple = theme.color.purple;
  return (
    <div>
      <Header textAlign='center' as='h4'>{title}</Header>
      <LineChart width={600} height={200} data={data} syncId="anyId" margin={{top: 0, right: 10, left: 0, bottom: 10}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <YAxis domain={domain}/>
        <Tooltip/>
        <Line type='monotone' dataKey={dataKey[0]} stroke={green} fill={green}/>
        {dataKey[1] && <Line type='monotone' dataKey={dataKey[1]} stroke={purple} fill={purple}/>}
        <Legend align='center' verticalAlign='bottom' height={36}/>
        <XAxis dataKey="name" hide={hideXAxis}/>
      </LineChart>
    </div>
  )
}

export default InitiativeChart;