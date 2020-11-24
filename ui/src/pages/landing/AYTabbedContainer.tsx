import React from 'react';
import { Tab } from 'semantic-ui-react';
import AYMeasureCards from "./AYMeasureCards";
import './AYTabbedContainer.css';

interface AYTabbedContainerProps  {
  years: number[]
}

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
const AYTabbedContainer: React.FunctionComponent<AYTabbedContainerProps> = ({ years }) => {
  const panes = years.map(year => { return { menuItem: `${year}`, render: () => <Tab.Pane><AYMeasureCards year={year}/></Tab.Pane>} })

  return (
    <Tab panes={panes}/>
  );
}

export default AYTabbedContainer;
