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
    console.log('in get product');
    return productData.find((product) => {
      console.log('product', product);
      console.log('id', id);
      return product.id === id;
    });
  }
}

module.exports = ProductAPI;
