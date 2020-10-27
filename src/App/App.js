import React, { Component } from 'react';
import http from '../utils/http/index';
import Students from '../components/Students/index';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    this.getStudens();
  }

  getStudens = () => {
    http
      .get('/students')
      .then((resp) => {
        this.setState({
          students: resp.data,
        });
      })
      .catch(() => {});
  };

  render() {
    return (
      <div data-testid="app" className="App">
        <div>Hello World</div>
        <Students students={this.state.students} />
      </div>
    );
  }
}

export default App;
