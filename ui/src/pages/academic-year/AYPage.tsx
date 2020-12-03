import React from 'react';
import {Container} from 'semantic-ui-react';
import AYTabbedContainer from "./AYTabbedContainer";
import {AYPageDB} from "../../DataTypes";

type AYPageProps = {
  latestYear: number
  ayPageDB: AYPageDB
}

const AYPage: React.FunctionComponent<AYPageProps> = ({latestYear, ayPageDB}) => {
  return (
    <Container fluid style={{paddingLeft: '10px', paddingRight: '10px'}}>
      <AYTabbedContainer latestYear={latestYear} ayPageDB={ayPageDB}/>
    </Container>
  );
}

export default AYPage;
