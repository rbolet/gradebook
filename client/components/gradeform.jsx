import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'newName': '',
      'newCourse': '',
      'newGrade': ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onInputChange(event) {
    const name = event.target.name;
    const newValue = event.target.value;

    this.setState({ [name]: newValue });
  }

  onAdd(event) {
    event.preventDefault();
    const newGradeEntry = Object.assign({}, this.state);
    this.props.onSubmit(newGradeEntry);
    document.querySelector('.add-grade-form').reset();
    this.onClear();
  }

  onClear() {
    this.setState({
      'newName': '',
      'newCourse': '',
      'newGrade': ''
    });
  }
  render() {
    return (
      <div className="grade-form col-12 col-md-3 d-flex flex-column align-items-center order-lg-12 mb-2">
        <form onSubmit={this.onAdd} className="add-grade-form ">
          <div className="d-flex flex-row align-items-center justify-content-end  mb-2">
            <i className="fas fa-user col-1"></i><input onChange={this.onInputChange} className="mx-2" type="text" name="newName" placeholder="Name" required/>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-end mb-2">
            <i className="fas fa-book-open"></i><input onChange={this.onInputChange} className="mx-2" type="text" name="newCourse" placeholder="Course" required/>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-end mb-2">
            <i className="fas fa-graduation-cap"></i>
            <input
              onChange={this.onInputChange}
              className="mx-2 w-75"
              name="newGrade"
              placeholder="Grade"
              type="number" min="0" max="100" required/>
          </div>
          <div className="btn-group-md d-flex flex-row justify-content-end" role="group" >
            <button className="btn btn-outline-secondary mx-1" type="submit">Add</button>
            <button onClick={this.onClear}className="btn btn-outline-secondary mx-1" type="reset">Clear</button>
          </div>
        </form>
      </div>
    );
  }
}

export default GradeForm;
