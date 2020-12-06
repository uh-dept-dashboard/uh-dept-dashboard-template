/**
 * The units associated with a Measure.
 */
import {ChartType} from "./Theme";

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
  COURSEEVALUATIONRESPONSE2 = 'COURSEEVALUATIONRESPONSE2',
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
  DEGREEPROGRAM = 'DEGREEPROGRAM',
  NUMBERSEMESTERS = 'NUMBERSEMESTERS',
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
 * Breakdowns also have a "trend", but a breakdown trend has a set of Measurements per year.
 * Label is typically required, or the order of occurrence in the array of Measurements is significant.
 * Example: { 2015: [{value: 33, label: 'Male'}, {value: 70, label: 'Female'}], ...}
 */
type BreakdownTrend = {
  [key in string]? : Measurement[]
}

/**
 * Provides the title, type, and data (over five years) for a Breakdown Chart.
 * Example: { chartType: 'BarSpark', chartTitle: 'By gender, ethnicity', chartData: { 2015: [{value: 33, label: 'Male'}, {value: 70, label: 'Female'}], ...}}
 */
interface BreakdownChart {
  chartType: ChartType,
  chartTitle: string,
  chartData: BreakdownTrend
}

/**
 * The AYPageDB
 *  db = {
 *    SSH: {
 *      name: 'SSH',
 *      unitType: 'Number',
 *      description: 'Measures the amount of instruction.'
 *      trend: { 2015: {value: 23}, 2016: {value: 24}, 2017: {value: 25}, 2018: {value: 26}, 2019: {value: 27}},
 *      breakdowns: [
 *        { chartTitle: 'By gender, ethnicity',
 *          chartType: 'DemographicPieSpark',
 *          chartData: { 2015: [{value: 2}, {value: 3}, {value: 4}, {value: 6}], 2016: [{value: 45} ... ] }
 *        }
 *      ]
 *    }
 *  }*
 */
type AYPageDB = {
  [measureType in MeasureType]?: {
    name: string,
    unitType: UnitType,
    description: string,
    trend: MeasureTrend,
    breakdowns: BreakdownChart[]
    drilldowns?: any[]
  }
}

enum TimelineType {
  DIVERSITYTIMELINE = 'DIVERSITYTIMELINE',
  MARKETABILITYTIMELINE = 'MARKETABILITYTIMELINE'
}

type TimelinePageDB = {
  [timelineType in TimelineType]?: {
    name: string,
    data: string
  }
}

type DashboardDB = {
  ayPageDB: AYPageDB,
  timelinePageDB: TimelinePageDB
}

export type { MeasureTrend, Measurement, AYPageDB, TimelinePageDB, DashboardDB, BreakdownTrend, BreakdownChart } ;
export { UnitType, MeasureType, BreakdownType };


