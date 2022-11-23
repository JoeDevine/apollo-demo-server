const { RESTDataSource } = require("apollo-datasource-rest");

// Example Data Source Logic
class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4012/";
  }
  getUser(id) {
    return this.get(`user/${id}`);
  }

  getUserData() {
    return {
      id: 123,
      data: "Test data for demo purposes",
    };
  }
}

module.exports = UserAPI;
