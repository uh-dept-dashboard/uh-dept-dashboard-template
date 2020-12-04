import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";
import {Header} from "semantic-ui-react";

type InitiativeChartProps = {
  data: any,
  title: string,
  dataKey: string,
  hideXAxis?: boolean
  domain?: any
}

const InitiativeChart: React.FunctionComponent<InitiativeChartProps> = ({data, dataKey, hideXAxis = true, domain = [0, 'auto'], title}) => {
  return (
    <div>
      <Header textAlign='center' as='h4'>{title}</Header>
      <LineChart width={600} height={200} data={data} syncId="anyId"
                 margin={{top: 0, right: 0, left: 0, bottom: 10}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <YAxis domain={domain}/>
        <Tooltip/>
        <Line type='monotone' dataKey={dataKey} stroke='#8884d8' fill='#8884d8'/>
        <Legend align='right' verticalAlign='middle' height={36} wrapperStyle={{left: '60px'}}/>
        <XAxis dataKey="name" hide={hideXAxis}/>
      </LineChart>
    </div>
  )
}

export default InitiativeChart;