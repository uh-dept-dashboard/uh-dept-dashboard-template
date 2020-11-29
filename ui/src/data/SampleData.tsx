import {ChartType, Units} from "../Theme";
import {AYMeasureCardProps} from "../pages/landing/AYMeasureCard";
import {Breakdowns, DashboardDB, Measurement, MeasurementSet, MeasureType, UnitType, BreakdownType} from "../DataTypes";

const endYear = 2019;
const startYear = endYear - 4;


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function makeDashboardDB(): DashboardDB {
  const dashboardDB: DashboardDB = {};
  dashboardDB[MeasureType.SSH] = {
    unitType: UnitType.Number,
    trend: makeMeasurementTrend(1000, 1500),
    breakdowns: makeSSHBreakdowns()
  }
  return dashboardDB;
}

function makeSSHBreakdowns(): Breakdowns {
  const breakdowns: Breakdowns = {};
  breakdowns[BreakdownType.BYFACULTY] = makeSortedMeasurements(15, 10);
  return breakdowns;
}

function makeMeasurementTrend(lower: number, upper: number): MeasurementSet {
 const trend: MeasurementSet = {};
 for (let i = startYear; i <= endYear; i++) {
   const year = `${i}`;
   const value = Math.floor(Math.random() * (upper - lower) + lower);
   trend[year] = { value };
 }
 return trend;
}


function makeRandomMeasurements(num: number, range = 101): Measurement[] {
  const data = [];
  for (let i = 0; i < num; i++) {
    data.push({value: Math.floor(Math.random() * range), year: startYear + i});
  }
  return data;
}

function makeSortedMeasurements(num: number, range = 101): Measurement[] {
  let data = [];
  for (let i = 0; i < num; i++) {
    data.push({value: Math.floor(Math.random() * range), year: 0});
  }
  data = data.sort(function (a, b) {
    return a.value - b.value
  });
  for (let i = 0; i < num; i++) {
    data[i].year = startYear + i;
  }
  return data;
}

const makeDemographicPieBreakdown = () => {
  const women = Math.floor(Math.random() * 20) + 3;
  const men = 100 - women;
  const data = [];
  data.push({value: women, label: 'Women'});
  data.push({value: men, label: 'Men'});
  const caucasian = 50 + Math.floor(Math.random() * 20);
  const nativeHawaiian = Math.floor(Math.random() * 10);
  const other = 100 - caucasian - nativeHawaiian;
  data.push({value: caucasian, label: 'Caucasian'});
  data.push({value: nativeHawaiian, label: 'Native Hawaiian'});
  data.push({value: other, label: 'Other'});
  return {chartType: ChartType.DemographicPieSpark, chartTitle: 'Breakdown by gender, ethnicity', chartData: data}
}

const makeInternshipBreakdown = () => {
  const data = [];
  const hawaii = 50 + Math.floor(Math.random() * 20);
  const mainland = Math.floor(Math.random() * 10);
  const other = 100 - hawaii - mainland;
  data.push({value: hawaii, label: 'Hawaii'});
  data.push({value: mainland, label: 'Mainland'});
  data.push({value: other, label: 'Other'});
  return {chartType: ChartType.PieSpark, chartTitle: 'Breakdown by location', chartData: data}
}

const makeUndergraduateResearchExperienceBreakdown = () => {
  const data = [];
  const urop = 50 + Math.floor(Math.random() * 20);
  const faculty = Math.floor(Math.random() * 10);
  const unfunded = 100 - urop - faculty;
  data.push({value: urop, label: 'UROP'});
  data.push({value: faculty, label: 'Faculty'});
  data.push({value: unfunded, label: 'Unfunded'});
  return {chartType: ChartType.PieSpark, chartTitle: 'Breakdown by funding', chartData: data}
}

const makePublicationTierBreakdown = () => {
  const data = [];
  data.push({value: Math.floor(Math.random() * 100), label: 'Tier 1'});
  data.push({value: Math.floor(Math.random() * 100), label: 'Tier 2'});
  data.push({value: Math.floor(Math.random() * 100), label: 'Other'});
  return {chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by publication quality', chartData: data}
}

const makeTimeToDegreeBreakdown = () => {
  const data = [];
  data.push({value: 2, label: '< 6'});
  data.push({value: Math.floor(Math.random() * 10), label: '6-8'});
  data.push({value: Math.floor(Math.random() * 10), label: '8-10'});
  data.push({value: Math.floor(Math.random() * 10), label: '10-12'});
  data.push({value: 2, label: '12+'});
  return {chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by number of semesters', chartData: data}
}

const makeAdmissionsBreakdown = () => {
  const data = [];
  data.push({value: Math.floor(Math.random() * 100), label: 'B.A.'});
  data.push({value: Math.floor(Math.random() * 100), label: 'B.S.'});
  data.push({value: Math.floor(Math.random() * 50), label: 'M.S.'});
  data.push({value: Math.floor(Math.random() * 50), label: 'Ph.D.'});
  return {chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by degree program', chartData: data}
}

const makeCourseEvaluationBreakdown = () => {
  const data = [];
  data.push({value: Math.floor(Math.random() * 100), label: 'Disagree'});
  data.push({value: Math.floor(Math.random() * 100), label: ''});
  data.push({value: Math.floor(Math.random() * 100), label: ''});
  data.push({value: Math.floor(Math.random() * 50), label: ''});
  data.push({value: Math.floor(Math.random() * 50), label: 'Agree'});
  return {chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by agreement', chartData: data}
}

const makeExitSurveyBreakdown = () => {
  const data = [];
  data.push({value: Math.floor(Math.random() * 100), label: 'UH'});
  data.push({value: Math.floor(Math.random() * 80), label: 'Another school'});
  data.push({value: Math.floor(Math.random() * 50), label: 'No school'});
  return {chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by response', chartData: data}
}

const makeStakeholderSurveyBreakdown = () => {
  const data = [];
  data.push({value: Math.floor(Math.random() * 50), label: 'Unsatisfied'});
  data.push({value: Math.floor(Math.random() * 100), label: ''});
  data.push({value: Math.floor(Math.random() * 100), label: ''});
  data.push({value: Math.floor(Math.random() * 50), label: ''});
  data.push({value: Math.floor(Math.random() * 50), label: 'Satisfied'});
  return {chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by satisfaction', chartData: data}
}

const makeFiveYearTrendBreakdown = () => {
  return {
    chartType: ChartType.LineSpark,
    chartTitle: 'Five year trend',
    chartData: makeRandomMeasurements(5)
  }
}

const makeByFacultyBreakdown = () => {
  return {chartType: ChartType.BarSpark, chartTitle: 'By faculty', chartData: makeSortedMeasurements(15, 10)}
}

const makeDelta = () => Math.floor(Math.random() * (30 - 20)) + 20;
const makeAYValue = (lower: number, upper: number) => Math.floor(Math.random() * (upper - lower) + lower);

function makeAYMeasureCardProps(name: string, year: number, description: string, lower: number, upper: number): AYMeasureCardProps {
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
  const props = makeAYMeasureCardProps('Graduate Student Support FTE', year, 'Measures the number of graduate students receiving support in the form of tuition waivers and a monthly stipend.', 120, 140);
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

function makeCourseEvaluationOneProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Course Evaluation Response', year, 'Measures responses to: "As a professional student, I found this course attractive and compatible with my work life."', 30, 50);
  props.value = props.value / 10;
  props.sparks.push(makeCourseEvaluationBreakdown());
  return props;
}

function makeCourseEvaluationTwoProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Course Evaluation Response', year, 'Measures responses to: "This course provided opportunities for me to improve my software development skills"', 30, 50);
  props.value = props.value / 10;
  props.sparks.push(makeCourseEvaluationBreakdown());
  return props;
}

function makeExitSurveyProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Exit Survey Response', year, 'Measures responses to: "If you could start your higher education experience over, would you still attend this program?"', 50, 80);
  props.unit = Units.Percent;
  props.sparks.push(makeExitSurveyBreakdown());
  return props;
}

function makeStakeholderSurveyProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Stakeholder Survey Response', year, 'Measures responses to: "I am satisfied with the quality of graduates from this program."', 10, 50);
  props.value = props.value / 10;
  props.sparks.push(makeStakeholderSurveyBreakdown());
  return props;
}

function makeInternshipProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Internship', year, 'Measures percentage of this year\'s graduates who participated in an internship program.', 50, 90);
  props.unit = Units.Percent;
  props.sparks.push(makeInternshipBreakdown());
  return props;
}

function makeUndergraduateResearchExperienceProps(year: number): AYMeasureCardProps {
  const props = makeAYMeasureCardProps('Undergrad Research Experience', year, 'Measures percentage of this year\'s graduates who participated in an undergraduate research experience.', 50, 90);
  props.unit = Units.Percent;
  props.sparks.push(makeUndergraduateResearchExperienceBreakdown());
  return props;
}

export {
  makeSSHCardProps,
  makeFacultyFTEProps,
  makeExtramuralFundingProps,
  makeRetentionProps,
  makePublicationsProps,
  makeGraduateStudentSupportFTEProps,
  makeGraduatesProps,
  makeTDDProps,
  makeAdmissionsProps,
  makeCourseEvaluationOneProps,
  makeCourseEvaluationTwoProps,
  makeExitSurveyProps,
  makeStakeholderSurveyProps,
  makeInternshipProps,
  makeUndergraduateResearchExperienceProps
};
