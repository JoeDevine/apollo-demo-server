const { RESTDataSource } = require("apollo-datasource-rest");

const productData = [{ id: "320" }, { id: "321" }, { id: "322" }];

const userData = [
  { id: "1", products: productData },
  { id: "2", products: productData },
  { id: "3", products: productData }
];

const sitesData = [
  { id: 0, name: foo, customer: "customer 1" },
  { id: 1, name: bar, customer: "customer 2" },
  { id: 2, name: baz, customer: "customer 3" }
];

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

  getData(id) {
    return this.get(`data/${id}`);
  }

  getProducts() {
    console.log("in get products");
    return productData;
  }

  getProduct(id) {
    return productData.find((product) => product.id === id);
  }

  getSites() {
    return sitesData;
  }

  getSitesById(id) {
    return sitesData.find((site) => site.id === id);
  }
}

module.exports = ProductAPI;
