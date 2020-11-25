import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import NavBar from "./NavBar";
import LandingPage from './pages/landing/LandingPage';

type AppProps = {
  latestAcademicYear: number,
  title: string
}

const App: React.FunctionComponent<AppProps> = ({title, latestAcademicYear}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavBar title={title}/>
      <LandingPage latestAcademicYear={latestAcademicYear}/>
    </div>
  );
}

export default App;
