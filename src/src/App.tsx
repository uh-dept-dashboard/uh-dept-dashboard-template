import React from 'react';
import './App.css';
import NavBar from "./NavBar";
import {Container} from 'semantic-ui-react';
import TabbedAYContainer from "./TabbedAYContainer";

const App: React.FunctionComponent = () => {
  const years = [2020, 2019, 2018, 2017, 2016]
  return (
    <div>
      <NavBar/>
      <Container>
        <TabbedAYContainer years={years}/>
      </Container>
    </div>
  );
}

export default App;
