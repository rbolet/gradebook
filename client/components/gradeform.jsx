import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      courseInput: '',
      gradeInput: ''
    };
  }

  render() {
    return (
      <div className="container">
        <form className="add-grade-form">
          <div className="container">
            <i className="fas fa-user"></i><input type="text" name="new-name" placeholder="Name" required/>
          </div>
          <div className="container">
            <i className="fas fa-book-open"></i><input type="text" name="new-course" placeholder="Course" required/>
          </div>
          <div className="container">
            <i className="fas fa-graduation-cap"></i><input type="text" name="new-grade" placeholder="Grade" required/>
          </div>
        </form>
      </div>
    );
  }
}

export default GradeForm;
