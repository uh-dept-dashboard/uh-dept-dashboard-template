import React from 'react';
import {LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis} from 'recharts';
import { theme } from '../../Theme';

interface SparkProps {
  data: { value: number, label?: string }[]
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

const LabeledBarSpark: React.FunctionComponent<SparkProps> = ({ data }) => {
  return (
    <BarChart width={theme.chartWidth} height={theme.chartHeight} data={data}>
      <Bar dataKey='value' fill={theme.color.green}  />
      <XAxis dataKey='label'/>
    </BarChart>
  )
}

const PieSpark: React.FunctionComponent<SparkProps> = ({ data }) => {
  return (
    <PieChart width={theme.chartWidth} height={theme.chartHeight} >
      <Pie data={data} dataKey='value' label={(entry) => entry.label} fill={theme.color.green} isAnimationActive={false} cx={theme.chartWidth/2} cy={theme.chartHeight/2} outerRadius={theme.chartHeight/4} />
    </PieChart>
  )
}

const DemographicPieSpark: React.FunctionComponent<SparkProps> = ({ data }) => {
  const data1 = data.slice(0,2);
  const data2 = data.slice(2, data.length);
  return (
    <PieChart width={theme.chartWidth} height={theme.chartHeight} >
      <Pie data={data1} dataKey='value' label={(entry) => entry.label} fill={theme.color.green} isAnimationActive={false} cx={theme.chartWidth/4} cy={theme.chartHeight/2} outerRadius={theme.chartHeight/4} />
      <Pie data={data2} dataKey='value' fill={theme.color.green} isAnimationActive={false} cx={(theme.chartWidth * 4)/5} cy={theme.chartHeight/2} outerRadius={theme.chartHeight/4} label={(entry) => entry.label}/>
    </PieChart>
  )
}

export type { SparkProps };
export { LineSpark, BarSpark, PieSpark, DemographicPieSpark, LabeledBarSpark };
