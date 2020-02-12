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
      <div className="grade-form col">
        <form onSubmit={this.onAdd} className="add-grade-form ">
          <div className="form-group row justify-content-center align-items-center">
            <i className="fas fa-user col-1 mr-2"></i>
            <input onChange={this.onInputChange}
              className="col-9" type="text" name="newName" placeholder="Name" required/>
          </div>
          <div className="form-group row justify-content-center align-items-center">
            <i className="fas fa-book-open col-1 mr-2"></i>
            <input onChange={this.onInputChange}
              className="col-9" type="text" name="newCourse" placeholder="Course" required/>
          </div>
          <div className="form-group row justify-content-center align-items-center">
            <i className="fas fa-graduation-cap col-1 mr-2"></i>
            <input
              onChange={this.onInputChange}
              className="col-9"
              name="newGrade"
              placeholder="Grade"
              type="number" min="0" max="100" required/>
          </div>
          <div className="btn-group-md row justify-content-center mb-4" role="group" >
            <button className="btn btn-success col-md-2 col-lg-4 mx-2" type="submit"><i className="fas fa-user-plus"></i></button>
            <button onClick={this.onClear} className="btn btn-danger col-md-2 col-lg-4" type="reset"><i className="fas fa-redo-alt"></i></button>
          </div>
        </form>
      </div>
    );
  }
}

export default GradeForm;
