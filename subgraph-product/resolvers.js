const resolvers = {
  Query: {
    allProducts: (_, __, context) => {
      return context.dataSources.productAPI.getProducts();
    },
    product: (_, args, context) => {
      return context.dataSources.productAPI.getProduct(args.id);
    },
  },
  Product: {
    cost(product) {
      console.log('Product ->', product);
      return product.size * product.weight;
    },
    __resolveReference(reference) {
      debug(`resolving product reference '${JSON.stringify(reference)}'`);
      return {
        id: '321',
      };
    },
  },
};

module.exports = resolvers;
