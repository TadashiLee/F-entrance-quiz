// eslint-disable-next-line import/no-extraneous-dependencies

import axios from 'axios';
// TODO GTB-工程实践: - /http这个文件夹命名没有反映业务逻辑
export default axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-type': 'application/json',
  },
});
