import React from 'react';
import { LineChart, Line } from 'recharts';
import { theme } from '../../Theme';

interface LineSparkProps  {
  // eslint-disable-next-line
  data: Record<string, any>
}

const LineSpark: React.FunctionComponent<LineSparkProps> = ({ data }) => {
  // eslint-disable-next-line no-console
  console.log(data.data);
  return (
    <LineChart width={theme.chartWidth} height={theme.chartHeight} data={data.data}>
      <Line type='monotone' dataKey='value' stroke={theme.color.green} strokeWidth={2} />
    </LineChart>
  )
}

export default LineSpark;
