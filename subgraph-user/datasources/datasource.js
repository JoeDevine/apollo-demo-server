const { RESTDataSource } = require("apollo-datasource-rest");

const itemData = [
  { id: "320", size: 2, weight: 3 },
  { id: "321", size: 2, weight: 3 },
  { id: "322", size: 2, weight: 3 }
];

const userData = [
  { id: "1", name: "John", surname: "Ward", items: itemData },
  { id: "2", name: "Bob", surname: "Stevens", items: itemData },
  { id: "3", name: "Kevin", surname: "Richards", items: itemData }
];

const sitesData = [
  { id: 1, name: bar, landingDate: "2023-07-31T09:54:07.466Z" },
  { id: 2, name: baz, landingDate: "2023-08-28T09:54:07.466Z" }
];

// Example Data Source Logic
class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4012/";
  }
  getUser(id) {
    return this.get(`user/${id}`);
  }

  getUsers() {
    return userData;
  }

  getuserById(id) {
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

  getSites() {
    return sitesData;
  }

  getSitesById(id) {
    return sitesData.find((site) => site.id === id);
  }
}

module.exports = UserAPI;
