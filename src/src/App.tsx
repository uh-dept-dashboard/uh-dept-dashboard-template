import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import NavBar from "./NavBar";
import { Container } from 'semantic-ui-react';
import TabbedAYContainer from "./TabbedAYContainer";

type AppProps = {
  latestAcademicYear: number
}

const App: React.FunctionComponent<AppProps> = ({latestAcademicYear}) => {
  const years = [latestAcademicYear, latestAcademicYear - 1, latestAcademicYear - 2, latestAcademicYear - 3, latestAcademicYear - 4];

  return (
    <div>
      <Helmet>
        <title>UH Dept Dashboard Template</title>
      </Helmet>
      <NavBar/>
      <Container fluid style={{paddingLeft: '10px', paddingRight: '10px'}}>
        <TabbedAYContainer years={years}/>
      </Container>
    </div>
  );
}

export default App;
