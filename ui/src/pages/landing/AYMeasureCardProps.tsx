import {AYMeasureCardProps} from "./AYMeasureCard";
import {Units} from "../../Theme";
import {DashboardDB} from "../../DataTypes";

const makeDelta = () => Math.floor(Math.random() * (30 - 20)) + 20;

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

function makeSSHCardProps(year: number, dashboardDB: DashboardDB): AYMeasureCardProps {
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
  makeUndergraduateResearchExperienceProps,
};