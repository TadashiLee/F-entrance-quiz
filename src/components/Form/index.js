import React, { Component } from 'react';
// TODO GTB-知识点: - 组件的名字叫Form，但是好像又做了分组的事情？
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
        {/* // TODO GTB-知识点: - 每个组的id不应该在前端生成，应该来自后端 */}
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
