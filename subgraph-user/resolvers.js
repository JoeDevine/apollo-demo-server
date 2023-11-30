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
    users: (_, __, context) => {
      return context.dataSources.userAPI.getUsers();
    },
    userById: (_, args, context) => {
      return context.dataSources.userAPI.getUserById(args.id);
    }
  },
  Item: {
    __resolveReference(reference, context) {
      return context.dataSources.userAPI.getItem(reference.id);
    }
  }
};

module.exports = resolvers;
