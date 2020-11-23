import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App latestAcademicYear={2019}/>
  </React.StrictMode>,
  document.getElementById('root')
);
