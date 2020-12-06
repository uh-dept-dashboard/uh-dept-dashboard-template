import {AYMeasureCardProps} from "./AYMeasureCard";
import {ChartType} from "../../Theme";
import {AYPageDB, MeasureType} from "../../DataTypes";

function computeDelta(year: number, dashboardDB: AYPageDB, measureType: MeasureType, offset: number) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const measureData = dashboardDB[measureType]!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const currValue = measureData.trend[year]!.value!;
  if (measureData.trend[`${year + offset}`]) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const priorValue = measureData.trend[`${year + offset}`]!.value;
    return Math.floor(((priorValue - currValue) / currValue) * 100);
  }
  return 0;
}

function makeCardProps(measureType: MeasureType, latestYear: number, year: number, ayPageDB: AYPageDB): AYMeasureCardProps {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const measureData = ayPageDB[measureType]!;
  const name = measureData.name;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const value = measureData.trend[year]!.value!;
  const description = measureData.description;
  const unit = measureData.unitType;
  const priorDelta = computeDelta(year, ayPageDB, measureType, -1);
  const nextDelta = computeDelta(year, ayPageDB, measureType, 1);
  const years = [latestYear - 4, latestYear - 3, latestYear - 2, latestYear -1, latestYear];
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const trendData = years.map(year => measureData.trend[`${year}`]!); // convert to ordered list of Measures.
  for (const measure of trendData) {
    // @ts-ignore
    measure['currYear'] = year;
  }
  const fiveYearTrend = { chartType: ChartType.TrendLineSpark, chartTitle: 'Five year trend', chartData: trendData };
  const breakdownChart = measureData.breakdowns[0];
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const breakdownSpark = {chartType: breakdownChart.chartType, chartTitle: breakdownChart.chartTitle, chartData: breakdownChart.chartData[year]!};
  const sparks = [fiveYearTrend, breakdownSpark];
  const drilldowns: any[] = measureData.drilldowns || [];
  return { latestYear, name, value, description, unit, year, priorDelta, nextDelta, sparks, drilldowns }
}

export {makeCardProps};
