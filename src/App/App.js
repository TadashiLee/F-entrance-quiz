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
      // TODO GTB-工程实践: - 变量命名不规范。showGroup是一个动词，但是这里显然需要一个名词
      showGroup: [],
    };
  }

  componentDidMount() {
    this.getStudens();
  }
// TODO GTB-工程实践: - Studens单词拼写错误
  getStudens = () => {
    http
      .get('/students')
      .then((resp) => {
        this.setState({
          students: resp.data,
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
      </div>
    );
  }
}

export default App;
