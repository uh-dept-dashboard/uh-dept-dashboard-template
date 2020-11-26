import { ChartType } from "../Theme";
import { AYMeasureCardProps } from "../pages/landing/AYMeasureCard";

const makeSampleSparkData = () => {
  const data = [];
  for (let i = 0; i < 5; i++) {
    data.push({ value: Math.floor(Math.random() * 101) });
  }
  return data;
}

const sampleSparks = () => [
  {
    chartType: ChartType.LineSpark,
    title: 'Five Year Trend',
    data: makeSampleSparkData(),
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
    sparks: sampleSparks()
  }
}

function makeSSHCardProps(year: number): AYMeasureCardProps {
  return makeAYMeasureCardProps('SSH', year, 'Student Semester Hours measures the amount of instruction.', 1000, 2000);
}

function makeFacultyFTEProps(year: number): AYMeasureCardProps {
  return makeAYMeasureCardProps('Faculty FTE', year, 'Faculty FTE measures the number of faculty available for teaching, research and service.', 15, 20);
}

function makeExtramuralFundingProps(year: number): AYMeasureCardProps {
  return makeAYMeasureCardProps('Extramural Funding', year, 'Extramural funding measures the dollar amount of funding brought in by faculty to this academic unit (or the University as a whole.', 2000000, 3000000);
}

function makeRetentionProps(year: number): AYMeasureCardProps {
  return makeAYMeasureCardProps('Retention', year, 'Retention measures the percentage of students entering the academic program who receive a degree in it.', 20, 40);
}

function makePublicationsProps(year: number): AYMeasureCardProps {
  return makeAYMeasureCardProps('Publications', year, 'Publications measures the number of published scholarly works.', 20, 40);
}

function makeGraduateStudentSupportFTEProps(year: number): AYMeasureCardProps {
  return makeAYMeasureCardProps('Graduate Student Support FTE', year, 'Graduate Student Support FTE measures the number of graduate students receiving support in the form of tuition waivers and a monthly stipend.', 12, 14);
}

function makeGraduatesProps(year: number): AYMeasureCardProps {
  return makeAYMeasureCardProps('Graduates', year, 'Graduates measures the number of students receiving a degree.', 120, 150);
}

export { makeSSHCardProps, makeFacultyFTEProps,makeExtramuralFundingProps, makeRetentionProps, makePublicationsProps, makeGraduateStudentSupportFTEProps, makeGraduatesProps };
