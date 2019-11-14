import React from 'react';

function GradeTable(props) {

  const allGrades = props.grades.map(
    gradeResult => <Grade key={gradeResult.id} gradeRow={gradeResult}/>
  );

  return (
    <table className="table sgt-table">
      <tr className="row-headers">
        <th scope="col">Student</th>
        <th scope="col">Course</th>
        <th scope="col">Grade</th>
      </tr>
      {allGrades}
    </table>
  );
}

function Grade(props) {
  return (
    <tr scope="row" key={props.gradeRow.id}>
      <td>{props.gradeRow.name}</td>
      <td>{props.gradeRow.course}</td>
      <td>{props.gradeRow.grade}</td>
    </tr>
  );
}

export default GradeTable;
