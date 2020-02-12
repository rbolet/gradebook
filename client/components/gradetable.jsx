import React from 'react';

function GradeTable(props) {
  let AllGrades = [];
  if (props.grades.length < 1) {
    AllGrades = (<tr className="w-100"><td className="w-100 text-muted">No Results Found</td></tr>);
  } else {
    AllGrades = props.grades.map(gradeResult => {
      return (
        <Grade
          key={gradeResult.id}
          gradeRow={gradeResult}
          onDelete={props.onDelete}/>
      );
    });
  }

  return (
    <div className="col-lg-9">
      <table className="table sgt-table">
        <tbody>
          <tr className="row-headers">
            <th scope="col">Student</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
            <th scope="col"></th>
          </tr>
          {AllGrades}
        </tbody>
      </table>
    </div>
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
            <button onClick={this.props.onDelete.bind(this, this.props.gradeRow.id)}
              className="btn btn-outline-danger" >
              <i className="far fa-trash-alt"/>
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
export default GradeTable;
