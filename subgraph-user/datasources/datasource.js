const { RESTDataSource } = require("apollo-datasource-rest");

const itemData = [
  { id: "320", size: 7, weight: 8 },
  { id: "321", size: 9, weight: 10 },
  { id: "322", size: 11, weight: 12 }
];

const userData = [
  { id: "1", name: "John", surname: "Ward", items: itemData },
  { id: "2", name: "Bob", surname: "Stevens", items: itemData },
  { id: "3", name: "Kevin", surname: "Richards", items: itemData }
];

// Example Data Source Logic
class UserAPI extends RESTDataSource {
  constructor(config) {
    super();
    this.baseURL = "https://api.coindesk.com/";
    this.initialize(config);
  }

  requestDeduplicationPolicyFor(url, request) {
    const cacheKey = this.cacheKeyFor(url, request);
    return { policy: "do-not-deduplicate" };
  }

  async testCache() {
    console.log("In test method");
    return this.get("v1/bpi/currentprice.json", {
      cacheOptions: { ttl: 0 }
    });
  }

  getUsers() {
    return userData;
  }

  getUserById(id) {
    return userData.find((user) => user.id === id);
  }

  getUserData() {
    return {
      id: 123,
      data: "Test data for demo purposes"
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
