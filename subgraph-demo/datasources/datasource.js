const { RESTDataSource } = require("apollo-datasource-rest");

// Example Data Source Logic
class DemoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4011/";
  }
  getUser(id) {
    return this.get(`data/${id}`);
  }

  getDemoData() {
    return {
      id: 123,
      data: "Test data for demo purposes",
    };
  }
}

module.exports = DemoAPI;
