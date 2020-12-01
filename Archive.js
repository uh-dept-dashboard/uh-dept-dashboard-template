// const makeDemographicPieBreakdown = () => {
//   const women = Math.floor(Math.random() * 20) + 3;
//   const men = 100 - women;
//   const data = [];
//   data.push({value: women, label: 'Women'});
//   data.push({value: men, label: 'Men'});
//   const caucasian = 50 + Math.floor(Math.random() * 20);
//   const nativeHawaiian = Math.floor(Math.random() * 10);
//   const other = 100 - caucasian - nativeHawaiian;
//   data.push({value: caucasian, label: 'Caucasian'});
//   data.push({value: nativeHawaiian, label: 'Native Hawaiian'});
//   data.push({value: other, label: 'Other'});
//   return {chartType: ChartType.DemographicPieSpark, chartTitle: 'Breakdown by gender, ethnicity', chartData: data}
// }
//
// const makeInternshipBreakdown = () => {
//   const data = [];
//   const hawaii = 50 + Math.floor(Math.random() * 20);
//   const mainland = Math.floor(Math.random() * 10);
//   const other = 100 - hawaii - mainland;
//   data.push({value: hawaii, label: 'Hawaii'});
//   data.push({value: mainland, label: 'Mainland'});
//   data.push({value: other, label: 'Other'});
//   return {chartType: ChartType.PieSpark, chartTitle: 'Breakdown by location', chartData: data}
// }
//
// const makeUndergraduateResearchExperienceBreakdown = () => {
//   const data = [];
//   const urop = 50 + Math.floor(Math.random() * 20);
//   const faculty = Math.floor(Math.random() * 10);
//   const unfunded = 100 - urop - faculty;
//   data.push({value: urop, label: 'UROP'});
//   data.push({value: faculty, label: 'Faculty'});
//   data.push({value: unfunded, label: 'Unfunded'});
//   return {chartType: ChartType.PieSpark, chartTitle: 'Breakdown by funding', chartData: data}
// }
//
// const makePublicationTierBreakdown = () => {
//   const data = [];
//   data.push({value: Math.floor(Math.random() * 100), label: 'Tier 1'});
//   data.push({value: Math.floor(Math.random() * 100), label: 'Tier 2'});
//   data.push({value: Math.floor(Math.random() * 100), label: 'Other'});
//   return {chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by publication quality', chartData: data}
// }
//
// const makeTimeToDegreeBreakdown = () => {
//   const data = [];
//   data.push({value: 2, label: '< 6'});
//   data.push({value: Math.floor(Math.random() * 10), label: '6-8'});
//   data.push({value: Math.floor(Math.random() * 10), label: '8-10'});
//   data.push({value: Math.floor(Math.random() * 10), label: '10-12'});
//   data.push({value: 2, label: '12+'});
//   return {chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by number of semesters', chartData: data}
// }
//
// const makeAdmissionsBreakdown = () => {
//   const data = [];
//   data.push({value: Math.floor(Math.random() * 100), label: 'B.A.'});
//   data.push({value: Math.floor(Math.random() * 100), label: 'B.S.'});
//   data.push({value: Math.floor(Math.random() * 50), label: 'M.S.'});
//   data.push({value: Math.floor(Math.random() * 50), label: 'Ph.D.'});
//   return {chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by degree program', chartData: data}
// }
//
// const makeCourseEvaluationBreakdown = () => {
//   const data = [];
//   data.push({value: Math.floor(Math.random() * 100), label: 'Disagree'});
//   data.push({value: Math.floor(Math.random() * 100), label: ''});
//   data.push({value: Math.floor(Math.random() * 100), label: ''});
//   data.push({value: Math.floor(Math.random() * 50), label: ''});
//   data.push({value: Math.floor(Math.random() * 50), label: 'Agree'});
//   return {chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by agreement', chartData: data}
// }
//
// const makeExitSurveyBreakdown = () => {
//   const data = [];
//   data.push({value: Math.floor(Math.random() * 100), label: 'UH'});
//   data.push({value: Math.floor(Math.random() * 80), label: 'Another school'});
//   data.push({value: Math.floor(Math.random() * 50), label: 'No school'});
//   return {chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by response', chartData: data}
// }
//
// const makeStakeholderSurveyBreakdown = () => {
//   const data = [];
//   data.push({value: Math.floor(Math.random() * 50), label: 'Unsatisfied'});
//   data.push({value: Math.floor(Math.random() * 100), label: ''});
//   data.push({value: Math.floor(Math.random() * 100), label: ''});
//   data.push({value: Math.floor(Math.random() * 50), label: ''});
//   data.push({value: Math.floor(Math.random() * 50), label: 'Satisfied'});
//   return {chartType: ChartType.LabeledBarSpark, chartTitle: 'Breakdown by satisfaction', chartData: data}
// }
