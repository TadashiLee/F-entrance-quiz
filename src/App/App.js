import React, { Component } from 'react';
import http from '../utils/http/index';
import Students from '../components/Students/index';
import './App.scss';
import Form from '../components/Form/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      showTable: false,
      showGroup: [],
      showInput: false,
      addName: '',
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
          students: [...resp.data],
          showGroup: [...resp.data],
        });
      })
      .catch(() => {});
  };

  changeGroup = () => {
    this.setState((prev) => ({
      showTable: true,
      showGroup: prev.showGroup.sort(() => {
        return 0.5 - Math.random();
      }),
    }));
  };

  addStudent = () => {
    this.setState({
      showInput: true,
    });
  };

  changeName = (e) => {
    this.setState({
      addName: e.target.value,
    });
  };

  onKeyupEnter = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        showInput: false,
      });
      const addStudent = { id: this.state.students.length + 1, name: this.state.addName };
      http
        .post('/student', addStudent)
        .then(() => {
          this.getStudens();
        })
        .catch();
    }
  };

  render() {
    return (
      <div data-testid="app" className="App">
        <div>分组列表</div>
        {this.state.showTable ? (
          <div>
            <Form showGroup={this.state.showGroup} />
          </div>
        ) : (
          ''
        )}
        <button type="button" onClick={this.changeGroup}>
          分组学员
        </button>
        <div>学员列表</div>
        <Students students={this.state.students} />
        {this.state.showInput ? (
          <input
            type="text"
            value={this.state.addName}
            onChange={this.changeName}
            onKeyUp={this.onKeyupEnter}
          />
        ) : (
          <button type="button" onClick={this.addStudent}>
            +添加学员
          </button>
        )}
      </div>
    );
  }
}

export default App;
