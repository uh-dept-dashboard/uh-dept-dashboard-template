import React from 'react';
import {Container} from 'semantic-ui-react';
import {DashboardDB} from "../../DataTypes";

type TimelinePageProps = {
  latestYear: number
  dashboardDB: DashboardDB
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TimelinePage: React.FunctionComponent<TimelinePageProps> = ({latestYear, dashboardDB}) => {
  return (
    <Container fluid style={{paddingLeft: '10px', paddingRight: '10px'}}>
      <p>Welcome to the timeline page.</p>
    </Container>
  );
}

export default TimelinePage;
