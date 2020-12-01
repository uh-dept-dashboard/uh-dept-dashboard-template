import {AYMeasureCardProps} from "./AYMeasureCard";
import {ChartType} from "../../Theme";
import {DashboardDB, MeasureType} from "../../DataTypes";

const makeDelta = () => Math.floor(Math.random() * (30 - 20)) + 20;

function makeCardProps(measureType: MeasureType, latestYear: number, year: number, dashboardDB: DashboardDB): AYMeasureCardProps {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const measureData = dashboardDB[measureType]!;
  const name = measureData.name;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const value = measureData.trend[year]!.value!;
  const description = measureData.description;
  const priorDelta = makeDelta();
  const nextDelta = makeDelta();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const years = [latestYear - 4, latestYear - 3, latestYear - 2, latestYear -1];
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const trendData = years.map(year => measureData.trend[`${year}`]!);
  const fiveYearTrend = { chartType: ChartType.LineSpark, chartTitle: 'Five year trend', chartData: trendData };
  const breakdownChart = measureData.breakdowns[0];
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const breakdownSpark = {chartType: breakdownChart.chartType, chartTitle: breakdownChart.chartTitle, chartData: breakdownChart.chartData[year]!};
  const sparks = [fiveYearTrend, breakdownSpark];
  return { latestYear, name, value, description, year, priorDelta, nextDelta, sparks }
}

export {makeCardProps};
