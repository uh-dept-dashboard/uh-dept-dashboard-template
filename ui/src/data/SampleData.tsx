import {ChartType} from "../Theme";
import {
  BreakdownChart,
  AYPageDB,
  Measurement,
  MeasureTrend,
  MeasureType,
  UnitType,
  BreakdownTrend, DashboardDB
} from "../DataTypes";

const endYear = 2019;
const startYear = endYear - 4;
const yearList = [2015, 2016, 2017, 2018, 2019];

function makeAYPageDB(): AYPageDB {
  const dashboardDB: AYPageDB = {};
  dashboardDB[MeasureType.SSH] = {
    name: 'SSH',
    unitType: UnitType.Number,
    description: 'Measures the amount of instruction.',
    trend: makeMeasurementTrend(1000, 3000),
    breakdowns: makeByFacultyBreakdowns(),
    drilldowns: [{name: 'By Faculty, Courses', description: 'details on the SSH associated with faculty and courses.'}]
  }
  dashboardDB[MeasureType.FACULTYFTE] = {
    name: 'Faculty FTE',
    unitType: UnitType.Number,
    description: 'Measures the number of faculty available for teaching, research and service.',
    trend: makeMeasurementTrend(15, 25),
    breakdowns: makeByGenderEthnicityBreakdowns(),
    drilldowns: [{name: 'Peer institutions', description: 'details on how Faculty FTE for this academic unit compare to those of peer institutions.'}]
  }
  dashboardDB[MeasureType.EXTRAMURALFUNDING] = {
    name: 'Extramural Funding',
    unitType: UnitType.Dollars,
    description: 'Measures the dollar amount of funding brought in by faculty to this academic unit (or the University as a whole) for this AY',
    trend: makeMeasurementTrend(2000000, 3000000),
    breakdowns: makeByFacultyBreakdowns(),
    drilldowns: [
      {name: 'Peer institutions', description: 'details on how Faculty FTE for this academic unit compare to those of peer institutions.'},
      {name: 'By faculty', description: 'details on faculty extramural funding.'},
      {name: 'Submitted', description: 'details on submitted as well as awarded proposals.'},
    ]

  }
  dashboardDB[MeasureType.RETENTION] = {
    name: 'Retention',
    unitType: UnitType.Percent,
    description: 'Measures the percentage of students entering the academic program who receive a degree in it.',
    trend: makeMeasurementTrend(20, 30),
    breakdowns: makeByGenderEthnicityBreakdowns(),
    drilldowns: [{name: 'Course level', description: 'details on how retention varies by course level.'},
      {name: 'Peer institutions', description: 'details on how retention for this academic unit compares to peer institutions.'}]
  }
  dashboardDB[MeasureType.PUBLICATIONS] = {
    name: 'Publications',
    unitType: UnitType.Number,
    description: 'Measures the number of published scholarly works.',
    trend: makeMeasurementTrend(20, 30),
    breakdowns: makeByPublicationQualityBreakdowns(),
    drilldowns: [{name: 'By faculty', description: 'details on publications by each faculty member.'},
      {name: 'Impact factor', description: 'details on the impact factor associated with these publications.'}]
  }
  dashboardDB[MeasureType.GRADUATESTUDENTSUPPORTFTE] = {
    name: 'Graduate Student Support FTE',
    unitType: UnitType.Number,
    description: 'Measures the number of graduate students receiving support in the form of tuition waivers and a monthly stipend.',
    trend: makeMeasurementTrend(100, 200, 10),
    breakdowns: makeByFacultyBreakdowns(),
    drilldowns: [{name: 'By demographic', description: 'details on demographic background of grad students.'},
      {name: 'Peer institutions', description: 'details on how this academic unit compares to peer institutions.'}]
  }
  dashboardDB[MeasureType.GRADUATES] = {
    name: 'Graduates',
    unitType: UnitType.Number,
    description: 'Measures the number of students receiving a degree.',
    trend: makeMeasurementTrend(100, 200),
    breakdowns: makeByGenderEthnicityBreakdowns(),
    drilldowns: [{name: 'By degree program', description: 'details on the degree program chosen.'},
      {name: 'By level (B.S.,M.S.,Ph.D)', description: 'details on the level of graduates.'}]
  }
  dashboardDB[MeasureType.TIMETODEGREE] = {
    name: 'Time to Degree',
    unitType: UnitType.Number,
    description: 'Measures the number of semesters required by this year\'s graduates to obtain their undergraduate degree.',
    trend: makeMeasurementTrend(70, 100, 10),
    breakdowns: makeByNumberSemesterBreakdowns(),
    drilldowns: [{name: 'By demographic', description: 'details on demographic background of grad students.'},
      {name: 'Peer institutions', description: 'details on how this academic unit compares to peer institutions.'}]
  }
  dashboardDB[MeasureType.ADMISSIONS] = {
    name: 'Admissions',
    unitType: UnitType.Number,
    description: 'Measures the number of students admitted.',
    trend: makeMeasurementTrend(70, 100),
    breakdowns: makeByDegreeProgramBreakdowns(),
    drilldowns: [{name: 'Applied vs. Accepted', description: 'details on applicants vs accepted students.'},
      {name: 'Peer institutions', description: 'details on how this academic unit compares to peer institutions.'}]
  }
  dashboardDB[MeasureType.COURSEEVALUATIONRESPONSE] = {
    name: 'Course Evaluation Response',
    unitType: UnitType.Number,
    description: 'Measures responses to: "As a professional student, I found this course attractive and compatible with my work life."',
    trend: makeMeasurementTrend(30, 50, 10),
    breakdowns: makeCourseEvaluationResponseBreakdowns(),
    drilldowns: [{name: 'By course', description: 'details on the response, broken down by course.'}]
  }
  dashboardDB[MeasureType.COURSEEVALUATIONRESPONSE2] = {
    name: 'Course Evaluation Response',
    unitType: UnitType.Number,
    description: 'Measures responses to: "This course provided opportunities for me to improve my software development skills"',
    trend: makeMeasurementTrend(30, 50, 10),
    breakdowns: makeCourseEvaluationResponseBreakdowns(),
    drilldowns: [{name: 'By course', description: 'details on the response, broken down by course.'}]
  }
  dashboardDB[MeasureType.EXITSURVEYRESPONSE] = {
    name: 'Exit Survey Response',
    unitType: UnitType.Percent,
    description: 'Measures responses to: "If you could start your higher education experience over, would you still attend this program?',
    trend: makeMeasurementTrend(40, 60),
    breakdowns: makeExitSurveyResponseBreakdowns(),
    drilldowns: [{name: 'By degree program', description: 'details on the response, broken down by degree program.'}]

  }
  dashboardDB[MeasureType.STAKEHOLDERSURVEYRESPONSE] = {
    name: 'Stakeholder Survey Response',
    unitType: UnitType.Number,
    description: 'Measures responses to: "I am satisfied with the quality of graduates from this program."',
    trend: makeMeasurementTrend(30, 50, 10),
    breakdowns: makeStakeholderSurveyResponseBreakdowns()
  }
  dashboardDB[MeasureType.INTERNSHIP] = {
    name: 'Internship',
    unitType: UnitType.Percent,
    description: 'Measures percentage of this year\'s graduates who participated in an internship program.',
    trend: makeMeasurementTrend(30, 50),
    breakdowns: makeInternshipBreakdowns(),
    drilldowns: [{name: 'By geographic region', description: 'details on internships by geographic region.'}]
  }
  dashboardDB[MeasureType.UNDERGRADRESEARCHEXPERIENCE] = {
    name: 'Undergraduate Research Experience',
    unitType: UnitType.Percent,
    description: 'Measures percentage of this year\'s graduates who participated in an undergraduate research experience.',
    trend: makeMeasurementTrend(40, 60),
    breakdowns: makeUndergraduateResearchExperienceBreakdowns(),
    drilldowns: [{name: 'By faculty', description: 'details on UREs per faculty member.'},
      {name: 'Peer institutions', description: 'details on how this academic unit compares to peer institutions.'}]
  }
  return dashboardDB;
}

function makeUndergraduateResearchExperienceBreakdowns(): BreakdownChart[] {
  const trend: BreakdownTrend = {};
  for (const year of yearList) {
    trend[year] = makeUndergraduateResearchExperienceMeasurements();
  }
  return [{ chartTitle: 'By funding', chartType: ChartType.PieSpark, chartData: trend }];
}

function makeInternshipBreakdowns(): BreakdownChart[] {
  const trend: BreakdownTrend = {};
  for (const year of yearList) {
    trend[year] = makeInternshipMeasurements();
  }
  return [{ chartTitle: 'By location', chartType: ChartType.PieSpark, chartData: trend }];
}

function makeStakeholderSurveyResponseBreakdowns(): BreakdownChart[] {
  const trend: BreakdownTrend = {};
  for (const year of yearList) {
    trend[year] = makeStakeholderSurveyMeasurements();
  }
  return [{ chartTitle: 'By satisfaction', chartType: ChartType.LabeledBarSpark, chartData: trend }];
}

function makeExitSurveyResponseBreakdowns(): BreakdownChart[] {
  const trend: BreakdownTrend = {};
  for (const year of yearList) {
    trend[year] = makeExitSurveyMeasurements();
  }
  return [{ chartTitle: 'By response', chartType: ChartType.LabeledBarSpark, chartData: trend }];
}

function makeCourseEvaluationResponseBreakdowns(): BreakdownChart[] {
  const trend: BreakdownTrend = {};
  for (const year of yearList) {
    trend[year] = makeCourseEvaluationMeasurements();
  }
  return [{ chartTitle: 'By agreement', chartType: ChartType.LabeledBarSpark, chartData: trend }];
}

function makeByPublicationQualityBreakdowns(): BreakdownChart[] {
  const trend: BreakdownTrend = {};
  for (const year of yearList) {
    trend[year] = makePublicationQualityMeasurements();
  }
  return [{ chartTitle: 'By publication quality', chartType: ChartType.LabeledBarSpark, chartData: trend }];
}

function makeByDegreeProgramBreakdowns(): BreakdownChart[] {
  const trend: BreakdownTrend = {};
  for (const year of yearList) {
    trend[year] = makeByDegreeProgramMeasurements();
  }
  return [{ chartTitle: 'By degree program', chartType: ChartType.LabeledBarSpark, chartData: trend }];
}

function makeByFacultyBreakdowns(): BreakdownChart[] {
  const trend: BreakdownTrend = {};
  for (const year of yearList) {
    trend[year] = makeSortedMeasurements(15, 10);
  }
  return [{ chartTitle: 'By faculty', chartType: ChartType.BarSpark, chartData: trend }];
}

function makeByGenderEthnicityBreakdowns(): BreakdownChart[] {
  const trend: BreakdownTrend = {};
  for (const year of yearList) {
    trend[year] = makeDemographicMeasurements();
  }
  return [{ chartTitle: 'By gender, ethnicity', chartType: ChartType.DemographicPieSpark, chartData: trend }];
}

function makeByNumberSemesterBreakdowns(): BreakdownChart[] {
  const trend: BreakdownTrend = {};
  for (const year of yearList) {
    trend[year] = makeByNumberSemesterMeasurements();
  }
  return [{ chartTitle: 'By number of semesters', chartType: ChartType.LabeledBarSpark, chartData: trend }];
}

function makeUndergraduateResearchExperienceMeasurements(): Measurement[] {
  const data = [];
  const urop = 50 + Math.floor(Math.random() * 20);
  const faculty = Math.floor(Math.random() * 10);
  const unfunded = 100 - urop - faculty;
  data.push({value: urop, label: 'UROP'});
  data.push({value: faculty, label: 'Faculty'});
  data.push({value: unfunded, label: 'Unfunded'});
  return data;
}

function makeInternshipMeasurements(): Measurement[] {
  const data = [];
  const hawaii = 50 + Math.floor(Math.random() * 20);
  const mainland = Math.floor(Math.random() * 10);
  const other = 100 - hawaii - mainland;
  data.push({value: hawaii, label: 'Hawaii'});
  data.push({value: mainland, label: 'Mainland'});
  data.push({value: other, label: 'Other'});
  return data;
}

function makeExitSurveyMeasurements(): Measurement[] {
  const data = [];
  data.push({value: Math.floor(Math.random() * 100), label: 'UH'});
  data.push({value: Math.floor(Math.random() * 80), label: 'Another school'});
  data.push({value: Math.floor(Math.random() * 50), label: 'No school'});
  return data;
}

function makeStakeholderSurveyMeasurements(): Measurement[] {
  const data = [];
  data.push({value: Math.floor(Math.random() * 100), label: 'Unsatisfied'});
  data.push({value: Math.floor(Math.random() * 100), label: ''});
  data.push({value: Math.floor(Math.random() * 100), label: ''});
  data.push({value: Math.floor(Math.random() * 50), label: ''});
  data.push({value: Math.floor(Math.random() * 50), label: 'Satisfied'});
  return data;
}

function makeCourseEvaluationMeasurements(): Measurement[] {
  const data = [];
  data.push({value: Math.floor(Math.random() * 100), label: 'Disagree'});
  data.push({value: Math.floor(Math.random() * 100), label: ''});
  data.push({value: Math.floor(Math.random() * 100), label: ''});
  data.push({value: Math.floor(Math.random() * 50), label: ''});
  data.push({value: Math.floor(Math.random() * 50), label: 'Agree'});
  return data;
}

function makeByDegreeProgramMeasurements(): Measurement[] {
  const data = [];
  data.push({value: Math.floor(Math.random() * 100), label: 'B.A.'});
  data.push({value: Math.floor(Math.random() * 100), label: 'B.S.'});
  data.push({value: Math.floor(Math.random() * 50), label: 'M.S.'});
  data.push({value: Math.floor(Math.random() * 50), label: 'Ph.D.'});
  return data;
}

function makeByNumberSemesterMeasurements(): Measurement[] {
  const data = [];
  data.push({value: 2, label: '< 6'});
  data.push({value: Math.floor(Math.random() * 10), label: '6-8'});
  data.push({value: Math.floor(Math.random() * 10), label: '8-10'});
  data.push({value: Math.floor(Math.random() * 10), label: '10-12'});
  data.push({value: 2, label: '12+'});
  return data;
}

function makeDemographicMeasurements(): Measurement[] {
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
  return data;
}

function makePublicationQualityMeasurements(): Measurement[] {
  const data = [];
  data.push({value: Math.floor(Math.random() * 100), label: 'Tier 1'});
  data.push({value: Math.floor(Math.random() * 100), label: 'Tier 2'});
  data.push({value: Math.floor(Math.random() * 100), label: 'Other'});
  return data;
}


function makeMeasurementTrend(lower: number, upper: number, divisor = 1): MeasureTrend {
 const trend: MeasureTrend = {};
 for (const year of yearList) {
   let value = Math.floor(Math.random() * (upper - lower) + lower);
   value = value / divisor;
   trend[year] = { value, year };
 }
 return trend;
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

function logDashboardDB(dashboardDB: DashboardDB) {
  // @ts-ignore
  console.log('dashboardDB', dashboardDB);
}

const dashboardDB: DashboardDB = {
  ayPageDB: makeAYPageDB(),
  timelinePageDB: {}
};

logDashboardDB(dashboardDB);

export { dashboardDB };
