import React from 'react';
import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
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
        <Header text="Student Grade Table"/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

function Header(props) {
  return (<header>{props.text}</header>);
}

export default App;
