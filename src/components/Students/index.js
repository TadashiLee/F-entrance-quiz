import React, { Component } from 'react';

class Students extends Component {
  render() {
    const { students } = this.props;
    // TODO GTB-知识点: - React的列表选择，应该把.map()放到ul里面，而不是ul放到map里面

    return students.map((student) => (
      <ul>
        <li>
          {student.id}.{student.name}
        </li>
      </ul>
    ));
  }
}

export default Students;
