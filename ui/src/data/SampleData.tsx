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

const initializeSparks = () => [
  {
    chartType: ChartType.LineSpark,
    title: 'Five Year Trend',
    data: makeRandomData(5),
  }
];

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
    sparks: initializeSparks()
  }
}

function makeSSHCardProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('SSH', year, 'Student Semester Hours measures the amount of instruction.', 1500, 2000);
  props.sparks.push({ chartType: ChartType.BarSpark, title: 'By Faculty', data: makeSortedData(15, 10)});
  return props;
}

function makeFacultyFTEProps(year: number): AYMeasureCardProps {
  return makeAYMeasureCardProps('Faculty FTE', year, 'Faculty FTE measures the number of faculty available for teaching, research and service.', 15, 20);
}

function makeExtramuralFundingProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Extramural Funding', year, 'Extramural funding measures the dollar amount of funding brought in by faculty to this academic unit (or the University as a whole.', 2000000, 3000000);
  props.unit = Units.Dollars;
  props.sparks.push({ chartType: ChartType.BarSpark, title: 'By Faculty', data: makeSortedData(15)});
  return props;
}

function makeRetentionProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Retention', year, 'Retention measures the percentage of students entering the academic program who receive a degree in it.', 20, 40);
  props.unit = Units.Percent;
  return props;
}

function makePublicationsProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Publications', year, 'Publications measures the number of published scholarly works.', 20, 40);
  props.sparks.push({ chartType: ChartType.BarSpark, title: 'By Faculty', data: makeSortedData(15, 5)});
  return props;
}

function makeGraduateStudentSupportFTEProps(year: number): AYMeasureCardProps {
  const props =  makeAYMeasureCardProps('Graduate Student Support FTE', year, 'Graduate Student Support FTE measures the number of graduate students receiving support in the form of tuition waivers and a monthly stipend.', 12, 14);
  props.sparks.push({ chartType: ChartType.BarSpark, title: 'By Faculty', data: makeSortedData(15, 3)});
  return props;
}

function makeGraduatesProps(year: number): AYMeasureCardProps {
  return makeAYMeasureCardProps('Graduates', year, 'Graduates measures the number of students receiving a degree.', 120, 150);
}

export { makeSSHCardProps, makeFacultyFTEProps,makeExtramuralFundingProps, makeRetentionProps, makePublicationsProps, makeGraduateStudentSupportFTEProps, makeGraduatesProps };
