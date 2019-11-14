import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const testData = [{
  'name': 'Dan Paschal',
  'course': 'Web Development',
  'grade': 100,
  'id': 1
},
{
  'name': 'Scott Bowler',
  'course': 'Web Development',
  'grade': 100,
  'id': 2
},
{
  'name': 'Tim Davis',
  'course': 'Web Development',
  'grade': 50,
  'id': 3
}];

ReactDOM.render(
  <App grades={testData}/>,
  document.querySelector('#root')
);
