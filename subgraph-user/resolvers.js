const { AuthenticationError, ForbiddenError } = require("@apollo/server");
const authErrMessage = "*** you must be logged in ***";

const resolvers = {
  Query: {
    allItems: (_, __, context) => {
      return context.dataSources.userAPI.getItems();
    },
    items: (_, args, context) => {
      return context.dataSources.userAPI.getItem(args.id);
    },
    users: (_, args, context) => {
      return context.dataSources.userAPI.getUsers();
    },
    userById: (_, args, context) => {
      return context.dataSources.userAPI.getuserById(args.id);
    },
    sites: (_, __, context) => {
      return context.dataSources.productAPI.getSites();
    },
    siteById: (_, args, context) => {
      return context.dataSources.productAPI.getSitesById(args.id);
    }
  },
  Item: {
    __resolveReference(reference, context) {
      return context.dataSources.userAPI.getItem(reference.id);
    }
  },
  Site: {
    __resolveReference(reference, context) {
      console.log("Site reference -> ", reference, context.dataSources);
      return context.dataSources.userAPI.getSitesById(reference.id);
    }
  }
};

module.exports = resolvers;
