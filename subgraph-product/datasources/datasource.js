const { RESTDataSource } = require('apollo-datasource-rest');

const productData = [{ id: '320' }, { id: '321' }, { id: '322' }];

// Example Data Source Logic
class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4011/';
  }
  getData(id) {
    return this.get(`data/${id}`);
  }

  getProducts() {
    console.log('in get products');
    return productData;
  }

  getProduct(id) {
    return productData.find((product) => product.id === id);
  }
}

module.exports = ProductAPI;
