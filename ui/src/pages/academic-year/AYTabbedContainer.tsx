import React from 'react';
import { Tab } from 'semantic-ui-react';
import AYMeasureCards from "./AYMeasureCards";
import './AYTabbedContainer.css';
import {AYPageDB} from "../../DataTypes";

interface AYTabbedContainerProps  {
  latestYear: number,
  ayPageDB: AYPageDB
}

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
const AYTabbedContainer: React.FunctionComponent<AYTabbedContainerProps> = ({ latestYear, ayPageDB }) => {
  const years = [latestYear - 4, latestYear - 3, latestYear - 2, latestYear - 1, latestYear ];
  const panes = years.map(year => { return { menuItem: `${year}`, render: () => <Tab.Pane><AYMeasureCards latestYear={latestYear} year={year} ayPageDB={ayPageDB}/></Tab.Pane>} })

  return (
    <Tab panes={panes} defaultActiveIndex={4}/>
  );
}

export default AYTabbedContainer;
