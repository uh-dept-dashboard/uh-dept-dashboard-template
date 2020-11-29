enum UnitType {
  Dollars = '$',
  Percent = '%',
  Number = ''
}

enum ChartType {
  LineSpark = 'LineSpark',
  BarSpark = 'BarSpark',
  PieSpark = 'PieSpark',
  DemographicPieSpark = 'DemographicPieSpark',
  LabeledBarSpark = 'LabeledBarSpark'
}

enum MeasureType {
  SSH= 'SSH',
  FACULTYFTE = 'FACULTYFTE',
  EXTRAMURALFUNDING = 'EXTRAMURALFUNDING',
  RETENTION = 'RETENTION',
  PUBLICATIONS = 'PUBLICATIONS',
  GRADUATESTUDENTSUPPORTFTE = 'GRADUATESTUDENTSUPPORTFTE',
  GRADUATES = 'GRADUATES',
  TIMETODEGREE = 'TIMETODEGREE',
  ADMISSIONS = 'ADMISSIONS',
  COURSEEVALUATIONRESPONSE = 'COURSEEVALUATIONRESPONSE',
  EXITSURVEYRESPONSE = 'EXITSURVEYRESPONSE',
  STAKEHOLDERSURVEYRESPONSE = 'STAKEHOLDERSURVEYRESPONSE',
  INTERNSHIP = 'INTERNSHIP',
  UNDERGRADRESEARCHEXPERIENCE = 'UNDERGRADRESEARCHEXPERIENCE'
}

enum BreakdownType {
  BYFACULTY = 'BYFACULTY',
  DEMOGRAPHIC = 'DEMOGRAPHIC',
  INTERNSHIP = 'INTERNSHIP',
  UNDERGRADUATERESEARCHEXPERIENCE  = 'UNDERGRADUATERESEARCHEXPERIENCE',
  PUBLICATIONTIER = 'PUBLICATIONTIER',
  TIMETODEGREE = 'TIMETODEGREE',
  ADMISSIONS = 'ADMISSIONS',
  COURSEEVALUATION = 'COURSEEVALUATION',
  EXITSURVEY = 'EXITSURVEY',
  STAKEHOLDERSURVEY = 'STAKEHOLDERSURVEY'
}

interface Measurement {
  value: number,
  label?: string,
  year?: number
}

type MeasurementSet = {
  [key in string]? : Measurement
}

type BreakdownYearSet = {
  [key in string]? : Measurement[]
}

type Breakdowns = {
  [breakdownType in BreakdownType]?: BreakdownYearSet
}

type DashboardDB = {
  [measureType in MeasureType]?: {
    unitType: UnitType,
    description: string,
    trend: MeasurementSet,
    breakdowns: Breakdowns
  }
}

/**  Example DashboardDB Structure.
 *  db = {
 *    SSH: {
 *      trend: { 2015: {value: 23}, 2016: {value: 24}, 2017: {value: 25}, 2018: {value: 26}, 2019: {value: 27}},
 *      breakdowns: {
 *        BYFACULTY: { 2015: [{value: 2}, {value: 3}, {value: 4}, {value: 6}], 2016: [{value: 45} ... ] }
 *      }
 *    }
 *  }
 *
 */

export type { MeasurementSet, Measurement, DashboardDB, Breakdowns, BreakdownYearSet } ;
export { UnitType, ChartType, MeasureType, BreakdownType };


