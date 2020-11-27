import {ChartType, Units} from "../Theme";
import { AYMeasureCardProps } from "../pages/landing/AYMeasureCard";

const makeRandomData = (num: number, range = 101) => {
  const data = [];
  for (let i = 0; i < num; i++) {
    data.push({ value: Math.floor(Math.random() * range) });
  }
  return data;
}

const makeSortedData = (num: number, range = 101) => {
  const data = [];
  for (let i = 0; i < num; i++) {
    data.push({ value: Math.floor(Math.random() * range) });
  }
  return data.sort(function(a, b){return a.value - b.value });
}

const makeDemographicPieBreakdown = () => {
  const women = Math.floor(Math.random() * 20) + 3;
  const men = 100 - women;
  const data = [];
  data.push({ value: women, label: 'Women'});
  data.push({ value: men, label: 'Men'});
  const caucasian = 50 + Math.floor(Math.random() * 20);
  const nativeHawaiian = Math.floor(Math.random() * 10);
  const other = 100 - caucasian - nativeHawaiian;
  data.push({ value: caucasian, label: 'Caucasian'});
  data.push({ value: nativeHawaiian, label: 'Native Hawaiian'});
  data.push({ value: other, label: 'Other'});
  return { chartType: ChartType.DemographicPieSpark, chartTitle: 'Breakdown by gender, ethnicity', chartData: data}
}

const makePublicationTierBreakdown = () => {
  const data = [];
  data.push({ value: Math.floor(Math.random() * 100), label: 'Tier 1'});
  data.push({ value: Math.floor(Math.random() * 100), label: 'Tier 2'});
  data.push({ value: Math.floor(Math.random() * 100), label: 'Other'});
  return { chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by publication quality', chartData: data}
}

const makeTimeToDegreeBreakdown = () => {
  const data = [];
  data.push({ value: 2, label: '< 6'});
  data.push({ value: Math.floor(Math.random() * 10), label: '6-8'});
  data.push({ value: Math.floor(Math.random() * 10), label: '8-10'});
  data.push({ value: Math.floor(Math.random() * 10), label: '10-12'});
  data.push({ value: 2, label: '12+'});
  return { chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by number of semesters', chartData: data}
}

const makeAdmissionsBreakdown = () => {
  const data = [];
  data.push({ value: Math.floor(Math.random() * 100), label: 'B.A.'});
  data.push({ value: Math.floor(Math.random() * 100), label: 'B.S.'});
  data.push({ value: Math.floor(Math.random() * 50), label: 'M.S.'});
  data.push({ value: Math.floor(Math.random() * 50), label: 'Ph.D.'});
  return { chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by degree program', chartData: data}
}

const makeFiveYearTrendBreakdown = () => {
  return {
    chartType: ChartType.LineSpark,
    chartTitle: 'Five year trend',
    chartData: makeRandomData(5)
  }
}

const makeByFacultyBreakdown = () => {
  return { chartType: ChartType.BarSpark, chartTitle: 'By faculty', chartData: makeSortedData(15, 10)}
}

const makeDelta = () => Math.floor(Math.random() * (30 - 20)) + 20;
const makeAYValue = (lower:number, upper:number) => Math.floor(Math.random() * (upper - lower) + lower);

function makeAYMeasureCardProps (name: string, year: number, description: string, lower: number, upper :number): AYMeasureCardProps {
  return {
    name,
    value: makeAYValue(lower, upper),
    description,
    year,
    priorDelta: makeDelta(),
    nextDelta: makeDelta(),
    sparks: [makeFiveYearTrendBreakdown()]
  }
}

function makeSSHCardProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('SSH', year, 'Measures the amount of instruction.', 1500, 2000);
  props.sparks.push(makeByFacultyBreakdown());
  return props;
}

function makeFacultyFTEProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Faculty FTE', year, 'Measures the number of faculty available for teaching, research and service.', 15, 20);
  props.sparks.push(makeDemographicPieBreakdown());
  return props;
}

function makeExtramuralFundingProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Extramural Funding', year, 'Measures the dollar amount of funding brought in by faculty to this academic unit (or the University as a whole) for this AY.', 2000000, 3000000);
  props.unit = Units.Dollars;
  props.sparks.push(makeByFacultyBreakdown());
  return props;
}

function makeRetentionProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Retention', year, 'Measures the percentage of students entering the academic program who receive a degree in it.', 20, 40);
  props.unit = Units.Percent;
  props.sparks.push(makeDemographicPieBreakdown());
  return props;
}

function makePublicationsProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Publications', year, 'Measures the number of published scholarly works.', 20, 40);
  props.sparks.push(makePublicationTierBreakdown());
  return props;
}

function makeGraduateStudentSupportFTEProps(year: number): AYMeasureCardProps {
  const props =  makeAYMeasureCardProps('Graduate Student Support FTE', year, 'Measures the number of graduate students receiving support in the form of tuition waivers and a monthly stipend.', 120, 140);
  props.value = props.value / 10;
  props.sparks.push(makeByFacultyBreakdown());
  return props;
}

function makeGraduatesProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Graduates', year, 'Measures the number of students receiving a degree.', 120, 150);
  props.sparks.push(makeDemographicPieBreakdown());
  return props;
}

function makeTDDProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Time To Degree', year, 'Measures the number of semesters required by this year\'s graduates to obtain their undergraduate degree.', 80, 100);
  props.value = props.value / 10;
  props.sparks.push(makeTimeToDegreeBreakdown());
  return props;
}

function makeAdmissionsProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Admissions', year, 'Measures the number of students admitted this AY.', 80, 100);
  props.sparks.push(makeAdmissionsBreakdown());
  return props;
}

export { makeSSHCardProps, makeFacultyFTEProps,makeExtramuralFundingProps, makeRetentionProps, makePublicationsProps, makeGraduateStudentSupportFTEProps, makeGraduatesProps, makeTDDProps, makeAdmissionsProps};
