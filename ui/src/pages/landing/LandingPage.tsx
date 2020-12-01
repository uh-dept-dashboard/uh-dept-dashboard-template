import React from 'react';
import {Container} from 'semantic-ui-react';
import AYTabbedContainer from "./AYTabbedContainer";
import {DashboardDB} from "../../DataTypes";

type LandingPageProps = {
  latestYear: number
  dashboardDB: DashboardDB
}

const LandingPage: React.FunctionComponent<LandingPageProps> = ({latestYear, dashboardDB}) => {


  return (
    <Container fluid style={{paddingLeft: '10px', paddingRight: '10px'}}>
      <AYTabbedContainer latestYear={latestYear} dashboardDB={dashboardDB}/>
    </Container>
  );
}

export default LandingPage;
