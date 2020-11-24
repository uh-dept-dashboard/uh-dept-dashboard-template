import React from 'react';
import {Container} from 'semantic-ui-react';
import TabbedAYContainer from "./TabbedAYContainer";

type LandingPageProps = {
  latestAcademicYear: number
}

const LandingPage: React.FunctionComponent<LandingPageProps> = ({latestAcademicYear}) => {
  const years = [latestAcademicYear, latestAcademicYear - 1, latestAcademicYear - 2, latestAcademicYear - 3, latestAcademicYear - 4];

  return (
    <Container fluid style={{paddingLeft: '10px', paddingRight: '10px'}}>
      <TabbedAYContainer years={years}/>
    </Container>
  );
}

export default LandingPage;
