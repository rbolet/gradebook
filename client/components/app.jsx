import React from 'react';
import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      average: '--'
    };
  }

  componentDidMount() {
    fetch('api/grades', {
      method: 'GET',
      headers: {
        'Content-Type': 'text/JSON'
      } })
      .then(res => res.json())
      .then(grades => this.setState({ grades }));

  }
  render() {
    return (
      <div className="app-container container-fluid">
        <Header averageAll={this.state.average} text="Student Grade Table"/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

function Header(props) {
  return (
    <header className="row">
      <div className="col-md-9">{props.text}</div>
      <div className="average container col-md-3">
        <p>Average Grade<span className="badge badge-light ml-2">{props.averageAll}</span></p>

      </div>
    </header>);
}

export default App;
