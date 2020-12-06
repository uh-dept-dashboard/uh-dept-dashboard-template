import React from 'react';
import {LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, Dot, DotProps, Tooltip} from 'recharts';
import {theme} from '../../Theme';

interface SparkProps {
  data: { value: number, label?: string, year?: number }[]
}

function TrendlineSparkTooltip({ payload, active }:any) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">Year: {`${payload[0].payload.year}`}</p>
        <p className="intro">Value: {`${payload[0].payload.value}`}</p>
      </div>
    );
  }

  return null;
}

function trendLineSparkDot(dotProps: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Dot> & Readonly<DotProps> & Readonly<{ children?: React.ReactNode; }>) {
  // @ts-ignore
  if (dotProps.payload.year === dotProps.payload.currYear) {
    // @ts-ignore
    dotProps.stroke = 'red';
    // @ts-ignore
    dotProps.fill = 'red';
  }
  return <Dot {...dotProps}/>
}

const TrendLineSpark: React.FunctionComponent<SparkProps> = ({ data }) => {
  return (
    <LineChart width={theme.chartWidth} height={theme.chartHeight} data={data}>
      <Line isAnimationActive={false} type='monotone' dataKey='value' stroke={theme.color.green} strokeWidth={2} dot={trendLineSparkDot} />
      <Tooltip content={<TrendlineSparkTooltip />}/>
    </LineChart>
  )
}

const BarSpark: React.FunctionComponent<SparkProps> = ({ data }) => {
  return (
    <BarChart width={theme.chartWidth} height={theme.chartHeight} data={data}>
      <Bar dataKey='value' fill={theme.color.green}  />
      <Tooltip />
    </BarChart>
  )
}

const LabeledBarSpark: React.FunctionComponent<SparkProps> = ({ data }) => {
  return (
    <BarChart width={theme.chartWidth} height={theme.chartHeight} data={data}>
      <Bar dataKey='value' fill={theme.color.green}  />
      <XAxis dataKey='label'/>
      <Tooltip/>
    </BarChart>
  )
}

const PieSpark: React.FunctionComponent<SparkProps> = ({ data }) => {
  return (
    <PieChart width={theme.chartWidth} height={theme.chartHeight} >
      <Pie data={data} dataKey='value' label={(entry) => entry.label} fill={theme.color.green} isAnimationActive={false} cx={theme.chartWidth/2} cy={theme.chartHeight/2} outerRadius={theme.chartHeight/4} />
      <Tooltip/>
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
      <Tooltip/>
    </PieChart>
  )
}

export type { SparkProps };
export { TrendLineSpark, BarSpark, PieSpark, DemographicPieSpark, LabeledBarSpark };
