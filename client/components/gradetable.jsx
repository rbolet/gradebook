import React from 'react';

class GradeTable extends React.Component{
  constructor(props){
    super(props);

  }
}

render(){
  return (
  <div class="table-container">
    <table class="sgt-table">
      <tr class="row-headers">
        <th class="student-header">Student</th>
        <th class="course-header">Course</th>
        <th class="grade-header">Grade</th>
      </tr>
      <tr>
        <td>Sir Arthur</td>
        <td>Grail Questing</td>
        <td class="grade">5</td>
      </tr>
      <tr>
        <td>Sir Lancelot</td>
        <td>Grail Questing</td>
        <td class="grade">98</td>
      </tr>
    </table>
  </div>
  );
}


export default GradeTable
