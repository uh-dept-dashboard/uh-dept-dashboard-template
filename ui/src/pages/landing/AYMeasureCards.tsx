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

interface AYMeasureCardsProps {
  year: number
}

function makeCardInfo(year: number) : AYMeasureCardProps[] {
  return [
    makeSSHCardProps(year),
    makeFacultyFTEProps(year),
    makeExtramuralFundingProps(year),
    makeRetentionProps(year),
    makePublicationsProps(year),
    makeGraduateStudentSupportFTEProps(year),
    makeGraduatesProps(year),
    makeTDDProps(year),
    makeAdmissionsProps(year),
    makeCourseEvaluationOneProps(year),
    makeCourseEvaluationTwoProps(year),
    makeExitSurveyProps(year),
    makeStakeholderSurveyProps(year),
    makeInternshipProps(year),
    makeUndergraduateResearchExperienceProps(year)
  ]
}

/** Displays a set of Cards, each containing an AcademicYearMeasure. */
const AYMeasureCards: React.FunctionComponent<AYMeasureCardsProps> = ({ year }) => {
  const cardInfo = makeCardInfo(year);
  return (
    <Card.Group centered>
      {cardInfo.map((info, index) => <AYMeasureCard key={index} {...info}/>)}
    </Card.Group>
  );
}

export default AYMeasureCards;
