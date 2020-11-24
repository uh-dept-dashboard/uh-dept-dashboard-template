import React from 'react';
import { Tab } from 'semantic-ui-react';
import AcademicYear from "./AcademicYear";
import './TabbedAYContainer.css';

type TabbedAYContainerProps =  {
  years: number[]
}

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
const TabbedAYContainer: React.FunctionComponent<TabbedAYContainerProps> = ({ years }) => {
  const panes2 = years.map(year => { return { menuItem: `${year}`, render: () => <Tab.Pane><AcademicYear year={year}/></Tab.Pane>} })

  return (
    <Tab panes={panes2}/>
  );
}

export default TabbedAYContainer;
