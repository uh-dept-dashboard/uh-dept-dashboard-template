import React from 'react';
import {Helmet} from 'react-helmet';
import './App.css';
import NavBar from "./NavBar";
import AYPage from './pages/academic-year/AYPage';
import {DashboardDB} from "./DataTypes";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import DiversityPage from "./pages/initiatives/Diversity";

type AppProps = {
  latestYear: number,
  title: string
  dashboardDB: DashboardDB
}

const App: React.FunctionComponent<AppProps> = ({title, latestYear, dashboardDB}) => {
  return (
    <Router>
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <NavBar title={title}/>
        <Switch>
          <Route path="/diversity">
            <DiversityPage latestYear={latestYear} timelinePageDB={dashboardDB.timelinePageDB}/>
          </Route>
          <Route path="/">
            <AYPage latestYear={latestYear} ayPageDB={dashboardDB.ayPageDB}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
