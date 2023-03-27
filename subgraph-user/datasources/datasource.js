const { RESTDataSource } = require('apollo-datasource-rest');

const itemData = [
  { id: '320', size: 2, weight: 3 },
  { id: '321', size: 2, weight: 3 },
  { id: '322', size: 2, weight: 3 },
];

// Example Data Source Logic
class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4012/';
  }
  getUser(id) {
    return this.get(`user/${id}`);
  }

  getUserData() {
    return {
      id: 123,
      data: 'Test data for demo purposes',
    };
  }

  getItem(id) {
    return itemData.find((item) => item.id === id);
  }

  getItems() {
    return itemData;
  }
}

module.exports = UserAPI;
