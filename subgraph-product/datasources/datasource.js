const { RESTDataSource } = require("apollo-datasource-rest");

const productData = [{ id: "320" }, { id: "321" }, { id: "322" }];

const userData = [{ id: "1" }, { id: "2" }, { id: "3" }];

// Example Data Source Logic
class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4011/";
  }
  getUsers() {
    return userData;
  }

  getuserById(id) {
    return userData.find((user) => user.id === id);
  }

  getProducts() {
    return productData;
  }

  getProduct(id) {
    return productData.find((product) => product.id === id);
  }
}

module.exports = ProductAPI;
