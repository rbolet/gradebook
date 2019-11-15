import React from 'react';
import GradeTable from './gradetable';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      average: '--'
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  updateTable(grades) {
    const average = this.calculateAverage(grades);
    this.setState({ grades, average });

  }

  onSubmit(newGradeEntry) {
    const request = {
      'name': newGradeEntry.newName,
      'course': newGradeEntry.newCourse,
      'grade': newGradeEntry.newGrade
    };
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    })
      .then(res => res.json())
      .then(newEntry => {
        const grades = this.state.grades.slice();
        grades.push(newEntry);
        this.updateTable(grades);
      });
  }

  calculateAverage(gradesArray) {
    let gradeSum = 0; let studentSum = 0;
    for (const student of gradesArray) {
      gradeSum += parseInt(student.grade);
      ++studentSum;
    }
    const average = Math.round(gradeSum / studentSum);
    return average;

  }

  componentDidMount() {
    fetch('/api/grades', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      } })
      .then(res => res.json())
      .then(grades => this.updateTable(grades));

  }
  render() {
    return (
      <div className="app-container container-fluid">
        <Header averageAll={this.state.average} text="Student Grade Table"/>
        <div className="container-fluid row">
          <GradeTable grades={this.state.grades}/><GradeForm onSubmit={this.onSubmit}/>
        </div>
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
