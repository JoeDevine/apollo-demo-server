const { AuthenticationError, ForbiddenError } = require('@apollo/server');
const authErrMessage = '*** you must be logged in ***';

const resolvers = {
  Query: {
    allItems: (_, __, context) => {
      return context.dataSources.userAPI.getItems();
    },
    items: (_, args, context) => {
      return context.dataSources.userAPI.getItem(args.id);
    },
  },
  Item: {
    __resolveReference(reference, context) {
      console.log('Item reference -> ', reference, context);
      console.log('context.dataSources.userAPI', context.dataSources.userAPI);
      console.log(
        'result from item ->',
        context.dataSources.userAPI.getItem(reference.id)
      );
      return context.dataSources.userAPI.getItem(reference.id);
    },
  },
};

module.exports = resolvers;
