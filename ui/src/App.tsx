import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import NavBar from "./NavBar";
import LandingPage from './pages/landing/LandingPage';
import { DashboardDB } from "./DataTypes";

type AppProps = {
  latestAcademicYear: number,
  title: string
  dashboardDB: DashboardDB
}

const App: React.FunctionComponent<AppProps> = ({title, latestAcademicYear, dashboardDB}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavBar title={title}/>
      <LandingPage latestAcademicYear={latestAcademicYear} dashboardDB={dashboardDB}/>
    </div>
  );
}

export default App;
