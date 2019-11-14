import React from 'react';
import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: props.grades
    };
  }
  render() {
    return (
      <div className="app-container">
        <Header text="Student Grade Table"/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

function Header(props) {
  return (<header>{props.text}</header>);
}

export default App;
