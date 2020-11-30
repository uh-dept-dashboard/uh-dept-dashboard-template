/**
 * The units associated with a Measure.
 */
enum UnitType {
  Dollars = '$',
  Percent = '%',
  Number = 'Number'
}

/**
 * All of the possible Measures.
 */
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

/**
 * All of the possible Breakdowns.
 */
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

/**
 * A single, primitive measurement. All Measures and Breakdowns are ultimately one or more Measurements.
 * Example: { value: 4 }
 */
interface Measurement {
  value: number,
  label?: string,
  year?: number
}

/**
 * All Measures compute a single Measurement per year. The "trend" is the past 5 years of the Measure.
 * Example: { 2015: {value: 2}, 2016: {value: 3}, 2017: {value: 4}, 2018: {value: 5}, 2019: {value: 1}}
 */
type MeasureTrend = {
  [key in string]? : Measurement
}

/**
 * Breakdowns also have a "trend", but a breakdown consists of a set of Measurements. Label is typically required, or
 * the order of occurrence in the array is significant.
 * Example: { 2015: [{value: 33, label: 'Male'}, {value: 70, label: 'Female'}], ...}
 */
type BreakdownTrend = {
  [key in string]? : Measurement[]
}

/**
 * Provides the description of a Breakdown, plus the data associated with it.
 * Example: { description: 'Diversity', trend: { 2015: [{value: 33, label: 'Male'}, {value: 70, label: 'Female'}], ...}}
 */
interface BreakdownInfo {
  description: string,
  trend: BreakdownTrend
}

/**
 * Provides all Breakdowns associated with a given Measure.
 * Example: { BYFACULTY: { description: 'By faculty', trend: ...}, DIVERSITY: { description: ...}, ...}
 */
type Breakdowns = {
  [breakdownType in BreakdownType]?: BreakdownInfo
}

/**
 * The global data structure containing all Measures and Breakdowns.
 *  db = {
 *    SSH: {
 *      unitType: 'Number',
 *      description: 'Measures the amount of instruction.'
 *      trend: { 2015: {value: 23}, 2016: {value: 24}, 2017: {value: 25}, 2018: {value: 26}, 2019: {value: 27}},
 *      breakdowns: {
 *        BYFACULTY: { description: 'Measures the number of faculty available for teaching, research and service.',
 *                     trend: { 2015: [{value: 2}, {value: 3}, {value: 4}, {value: 6}], 2016: [{value: 45} ... ] } }
 *      }
 *    }
 *  }*
 */
type DashboardDB = {
  [measureType in MeasureType]?: {
    unitType: UnitType,
    description: string,
    trend: MeasureTrend,
    breakdowns: Breakdowns
  }
}

export type { MeasureTrend, Measurement, DashboardDB, Breakdowns, BreakdownTrend } ;
export { UnitType, MeasureType, BreakdownType };


