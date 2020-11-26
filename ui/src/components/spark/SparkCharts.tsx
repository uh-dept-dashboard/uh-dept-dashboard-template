import React from 'react';
import { LineChart, Line, BarChart, Bar } from 'recharts';
import { theme } from '../../Theme';

interface SparkProps  {
  // eslint-disable-next-line
  data: Record<string, any>
}

const LineSpark: React.FunctionComponent<SparkProps> = ({ data }) => {
  return (
    <LineChart width={theme.chartWidth} height={theme.chartHeight} data={data.data}>
      <Line type='monotone' dataKey='value' stroke={theme.color.green} strokeWidth={2} />
    </LineChart>
  )
}

const BarSpark: React.FunctionComponent<SparkProps> = ({ data }) => {
  return (
    <BarChart width={theme.chartWidth} height={theme.chartHeight} data={data.data}>
      <Bar dataKey='value' fill={theme.color.green}  />
    </BarChart>
  )
}

export { LineSpark, BarSpark };
