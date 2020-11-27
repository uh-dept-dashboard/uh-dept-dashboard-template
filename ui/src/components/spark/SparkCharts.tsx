import React from 'react';
import {LineChart, Line, BarChart, Bar, PieChart, Pie} from 'recharts';
import { theme } from '../../Theme';

interface SparkProps {
  data: { value: number }[]
}

const LineSpark: React.FunctionComponent<SparkProps> = ({ data }) => {
  return (
    <LineChart width={theme.chartWidth} height={theme.chartHeight} data={data}>
      <Line type='monotone' dataKey='value' stroke={theme.color.green} strokeWidth={2} />
    </LineChart>
  )
}

const BarSpark: React.FunctionComponent<SparkProps> = ({ data }) => {
  return (
    <BarChart width={theme.chartWidth} height={theme.chartHeight} data={data}>
      <Bar dataKey='value' fill={theme.color.green}  />
    </BarChart>
  )
}

const PieSpark: React.FunctionComponent<SparkProps> = ({ data }) => {
  return (
    <PieChart width={theme.chartWidth} height={theme.chartHeight} >
      <Pie data={data} dataKey='value' fill={theme.color.green} isAnimationActive={false} cx="50%" cy="50%" outerRadius={80} label/>
    </PieChart>
  )
}

export type { SparkProps };
export { LineSpark, BarSpark, PieSpark };
