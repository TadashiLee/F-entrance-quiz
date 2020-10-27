import React, { Component } from 'react';

class Students extends Component {
  render() {
    const { students } = this.props;
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
