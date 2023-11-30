const { RESTDataSource } = require("apollo-datasource-rest");

const productData = [
  { id: "320", name: "product1", size: 1, weight: 2 },
  { id: "321", name: "product2", size: 3, weight: 4 },
  { id: "322", name: "product3", size: 5, weight: 6 }
];

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
