const resolvers = {
  Query: {
    allProducts: (_, __, context) => {
      return context.dataSources.productAPI.getProducts();
    },
    product: (_, args, context) => {
      return context.dataSources.productAPI.getProduct(args.id);
    },
    users: (_, __, context) => {
      return context.dataSources.productAPI.getUsers();
    },
    userById: (_, args, context) => {
      return context.dataSources.productAPI.getuserById(args.id);
    },
    sites: (_, __, context) => {
      return context.dataSources.productAPI.getSites();
    },
    siteById: (_, args, context) => {
      console.log("args", args);
      console.log(
        "resolver ->",
        context.dataSources.productAPI.getSitesById(args.key)
      );
      return context.dataSources.productAPI.getSitesById(args.key);
    }
  },
  Product: {
    cost(product) {
      console.log("Cost Product ->", product);
      return product.size * product.weight;
    },
    __resolveReference(reference, context) {
      console.log("Product reference -> ", reference, context.dataSources);
      return context.dataSources.productAPI.getProduct(reference.id);
    }
  },
  Site: {
    __resolveReference(reference, context) {
      console.log("Site reference -> ", reference, context.dataSources);
      return context.dataSources.productAPI.getSitesById(reference.id);
    }
  }
};

module.exports = resolvers;
