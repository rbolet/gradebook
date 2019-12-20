import React from 'react';

function GradeTable(props) {

  const allGrades = props.grades.map(
    gradeResult => <Grade key={gradeResult.id} gradeRow={gradeResult} onDelete={props.onDelete}/>
  );

  return (
    <table className="table sgt-table col-md-9">
      <tbody>
        <tr className="row-headers">
          <th scope="col">Student</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
          <th scope="col">Operations</th>
        </tr>
        {allGrades}
      </tbody>
    </table>
  );
}

class Grade extends React.Component {

  render() {
    return (
      <tr key={this.props.gradeRow.id}>
        <td>{this.props.gradeRow.name}</td>
        <td>{this.props.gradeRow.course}</td>
        <td>{this.props.gradeRow.grade}</td>
        <td>
          <div className="button-group d-flex justify-content-center" role="group">
            <button onClick={this.props.onDelete.bind(this, this.props.gradeRow.id)} className="btn btn-outline-danger mx-1" >Delete</button>
          </div>
        </td>
      </tr>
    );
  }
}
export default GradeTable;
