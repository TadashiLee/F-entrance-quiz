import React, { Component } from 'react';

class Form extends Component {
  groupingArray = (data) => {
    const group = [];
    const num = parseInt(data.length / 6, 10);
    const rem = data.length % 6;

    for (let i = 0; i < 6 * num; i += num) {
      group.push(data.slice(i, i + num));
    }
    for (let i = 0; i < rem; i += 1) {
      group[i].push(data[6 * num + i]);
    }
    return group;
  };

  render() {
    const { showGroup } = this.props;
    const groups = this.groupingArray(showGroup);
    return groups.map((group, index) => (
      <div>
        <div>第{index + 1}组</div>
        {group.map((student) => (
          <ul>
            <li>
              {student.id}.{student.name}
            </li>
          </ul>
        ))}
      </div>
    ));
  }
}

export default Form;
