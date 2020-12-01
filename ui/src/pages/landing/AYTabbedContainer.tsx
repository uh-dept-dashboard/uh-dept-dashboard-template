import React from 'react';
import { Tab } from 'semantic-ui-react';
import AYMeasureCards from "./AYMeasureCards";
import './AYTabbedContainer.css';
import {DashboardDB} from "../../DataTypes";

interface AYTabbedContainerProps  {
  years: number[],
  dashboardDB: DashboardDB
}

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
const AYTabbedContainer: React.FunctionComponent<AYTabbedContainerProps> = ({ years, dashboardDB }) => {
  const panes = years.map(year => { return { menuItem: `${year}`, render: () => <Tab.Pane><AYMeasureCards year={year}/></Tab.Pane>} })

  console.log(dashboardDB); //intimacyu

  return (
    <Tab panes={panes} defaultActiveIndex={4}/>
  );
}

export default AYTabbedContainer;
