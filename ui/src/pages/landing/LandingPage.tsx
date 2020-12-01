import React from 'react';
import {Container} from 'semantic-ui-react';
import AYTabbedContainer from "./AYTabbedContainer";
import {DashboardDB} from "../../DataTypes";

type LandingPageProps = {
  latestAcademicYear: number
  dashboardDB: DashboardDB
}

const LandingPage: React.FunctionComponent<LandingPageProps> = ({latestAcademicYear, dashboardDB}) => {
  const years = [latestAcademicYear - 4, latestAcademicYear - 3, latestAcademicYear - 2, latestAcademicYear - 1, latestAcademicYear ];

  return (
    <Container fluid style={{paddingLeft: '10px', paddingRight: '10px'}}>
      <AYTabbedContainer years={years} dashboardDB={dashboardDB}/>
    </Container>
  );
}

export default LandingPage;
