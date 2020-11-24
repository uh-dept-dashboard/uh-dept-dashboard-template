import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import NavBar from "./NavBar";
import LandingPage from './pages/landing/LandingPage';

type AppProps = {
  latestAcademicYear: number
}

const App: React.FunctionComponent<AppProps> = ({latestAcademicYear}) => {

  return (
    <div>
      <Helmet>
        <title>UH Dept Dashboard Template</title>
      </Helmet>
      <NavBar/>
      <LandingPage latestAcademicYear={latestAcademicYear}/>
    </div>
  );
}

export default App;
