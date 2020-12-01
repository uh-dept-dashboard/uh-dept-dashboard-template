import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import NavBar from "./NavBar";
import LandingPage from './pages/landing/LandingPage';
import { DashboardDB } from "./DataTypes";

type AppProps = {
  latestYear: number,
  title: string
  dashboardDB: DashboardDB
}

const App: React.FunctionComponent<AppProps> = ({title, latestYear, dashboardDB}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavBar title={title}/>
      <LandingPage latestYear={latestYear} dashboardDB={dashboardDB}/>
    </div>
  );
}

export default App;
