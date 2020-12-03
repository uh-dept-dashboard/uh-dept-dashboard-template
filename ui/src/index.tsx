import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';
import { dashboardDB } from "./data/SampleData";

ReactDOM.render(
  <React.StrictMode>
    <App title='UH Department Dashboard Template' latestYear={2019} dashboardDB={dashboardDB} />
  </React.StrictMode>,
  document.getElementById('root')
);
