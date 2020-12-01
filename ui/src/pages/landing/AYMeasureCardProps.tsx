import {AYMeasureCardProps} from "./AYMeasureCard";
import {ChartType} from "../../Theme";
import {DashboardDB, MeasureType} from "../../DataTypes";

const makeDelta = () => Math.floor(Math.random() * (30 - 20)) + 20;

function makeSSHCardProps(year: number, dashboardDB: DashboardDB): AYMeasureCardProps {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const sshData = dashboardDB[MeasureType.SSH]!;
  const name = sshData.name;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const value = sshData.trend[year]!.value!;
  const description = sshData.description;
  const priorDelta = makeDelta();
  const nextDelta = makeDelta();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const fiveYearTrend = { chartType: ChartType.LineSpark, chartTitle: 'Five year trend', chartData: [sshData.trend[2015]!, sshData.trend[2016]!, sshData.trend[2017]!, sshData.trend[2018]!, sshData.trend[2019]!] };
  // const breakdownChart = sshData.breakdowns[0];
  // const breakdownSpark = {chartType: breakdownChart.chartType, chartTitle: breakdownChart.chartTitle, chartData: breakdownChart.chartData[year]};
  const sparks = [fiveYearTrend];
  return { name, value, description, year, priorDelta, nextDelta, sparks }
}


export {
  makeSSHCardProps
};
