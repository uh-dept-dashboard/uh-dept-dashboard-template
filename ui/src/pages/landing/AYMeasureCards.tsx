import React from 'react';
import { Card } from 'semantic-ui-react';
import './AYMeasureCards.css';
import AYMeasureCard, {AYMeasureCardProps} from "./AYMeasureCard";
import {
  makeAdmissionsProps,
  makeCourseEvaluationOneProps,
  makeCourseEvaluationTwoProps, makeExitSurveyProps,
  makeExtramuralFundingProps,
  makeFacultyFTEProps,
  makeGraduatesProps,
  makeGraduateStudentSupportFTEProps, makeInternshipProps,
  makePublicationsProps,
  makeRetentionProps,
  makeSSHCardProps, makeStakeholderSurveyProps,
  makeTDDProps, makeUndergraduateResearchExperienceProps
} from "../../data/SampleData";
import {DashboardDB} from "../../DataTypes";

interface AYMeasureCardsProps {
  year: number,
  dashboardDB: DashboardDB
}

function makeCardInfo(year: number, dashboardDB: DashboardDB) : AYMeasureCardProps[] {
  return [
    makeSSHCardProps(year, dashboardDB),
    makeFacultyFTEProps(year, dashboardDB),
    makeExtramuralFundingProps(year, dashboardDB),
    makeRetentionProps(year, dashboardDB),
    makePublicationsProps(year, dashboardDB),
    makeGraduateStudentSupportFTEProps(year, dashboardDB),
    makeGraduatesProps(year, dashboardDB),
    makeTDDProps(year, dashboardDB),
    makeAdmissionsProps(year, dashboardDB),
    makeCourseEvaluationOneProps(year, dashboardDB),
    makeCourseEvaluationTwoProps(year, dashboardDB),
    makeExitSurveyProps(year, dashboardDB),
    makeStakeholderSurveyProps(year, dashboardDB),
    makeInternshipProps(year, dashboardDB),
    makeUndergraduateResearchExperienceProps(year, dashboardDB)
  ]
}

/** Displays a set of Cards, each containing an AcademicYearMeasure. */
const AYMeasureCards: React.FunctionComponent<AYMeasureCardsProps> = ({ year, dashboardDB }) => {
  const cardInfo = makeCardInfo(year, dashboardDB);
  return (
    <Card.Group centered>
      {cardInfo.map((info, index) => <AYMeasureCard key={index} {...info}/>)}
    </Card.Group>
  );
}

export default AYMeasureCards;
