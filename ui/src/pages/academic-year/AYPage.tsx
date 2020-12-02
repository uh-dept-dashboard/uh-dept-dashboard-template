import React from 'react';
import {Container} from 'semantic-ui-react';
import AYTabbedContainer from "./AYTabbedContainer";
import {DashboardDB} from "../../DataTypes";

type AYPageProps = {
  latestYear: number
  dashboardDB: DashboardDB
}

const AYPage: React.FunctionComponent<AYPageProps> = ({latestYear, dashboardDB}) => {
  return (
    <Container fluid style={{paddingLeft: '10px', paddingRight: '10px'}}>
      <AYTabbedContainer latestYear={latestYear} dashboardDB={dashboardDB}/>
    </Container>
  );
}

export default AYPage;
