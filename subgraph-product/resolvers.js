const resolvers = {
  Query: {
    products: (_, __, context) => {
      return context.dataSources.productAPI.getProducts();
    },
    productById: (_, args, context) => {
      return context.dataSources.productAPI.getProduct(args.id);
    },
    users: (_, __, context) => {
      return context.dataSources.productAPI.getUsers();
    },
    userById: (_, args, context) => {
      return context.dataSources.productAPI.getuserById(args.id);
    }
  },
  Product: {
    cost(product) {
      return product.size * product.weight;
    },
    __resolveReference(reference, context) {
      return context.dataSources.productAPI.getProduct(reference.id);
    }
  }
};

module.exports = resolvers;
