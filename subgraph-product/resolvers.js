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
      console.log('Cost Product ->', product);
      return product.size * product.weight;
    },
    __resolveReference(reference, context) {
      console.log('Product reference -> ', reference, context.dataSources);
      return context.dataSources.productAPI.getProduct(reference.id);
    },
  },
};

module.exports = resolvers;
