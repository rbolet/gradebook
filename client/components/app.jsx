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
    this.onDelete = this.onDelete.bind(this);
  }

  updateTable(grades) {
    const average = this.calculateAverage(grades);
    this.setState({ grades, average });

  }

  calculateAverage(gradesArray) {
    let gradeSum = 0; let studentSum = 0;
    for (const student of gradesArray) {
      gradeSum += parseInt(student.grade);
      ++studentSum;
    }
    let average = Math.round(gradeSum / studentSum);
    average = isNaN(average) ? '--' : average;
    return average;

  }

  onSubmit(newGradeEntry) {
    const requestBody = {
      name: newGradeEntry.newName,
      course: newGradeEntry.newCourse,
      grade: newGradeEntry.newGrade
    };
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    })
      .then(res => res.json())
      .then(newEntry => {
        const grades = this.state.grades.slice();
        grades.push(newEntry);
        this.updateTable(grades);
      })
      .catch(error => alert(`POST error: ${error}`));
  }

  onDelete(studentID) {
    fetch(`/api/grades/${studentID}`, {
      method: 'DELETE', headers: { 'Content-Type': 'application/json' } })
      .then(res => {
        const copy = this.state.grades.slice();
        const indexOfRecordInCopy = copy.findIndex(record => record.id === parseInt(studentID));

        copy.splice(indexOfRecordInCopy, 1);
        return copy;
      })
      .then(grades => this.updateTable(grades))
      .catch(error => alert(`DELETE error: ${error.message}`));
  }

  componentDidMount() {
    fetch('/api/grades', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      } })
      .then(res => res.json())
      .then(grades => this.updateTable(grades))
      .catch(error => alert(`GET error: ${error.message}`));

  }
  render() {
    return (
      <div className="app-container container-fluid">
        <Header averageAll={this.state.average} text="Student Grade Table"/>
        <div className="container-fluid row">
          <GradeTable grades={this.state.grades} onDelete={this.onDelete}/><GradeForm onSubmit={this.onSubmit}/>
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
