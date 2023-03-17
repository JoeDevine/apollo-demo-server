const { AuthenticationError, ForbiddenError } = require('@apollo/server');
const authErrMessage = '*** you must be logged in ***';

const resolvers = {
  Query: {
    example: () => 'Hello World!',
    thingDetails: () => {
      return {
        id: '123',
        name: 'Thing',
        description: 'a Thing',
      };
    },
    anotherDetails: () => {
      return {
        stuff: 'stuff',
      };
    },
    productDetails: (a, b, c, d) => {
      console.log('a -> ', a, 'b -> ', b, 'c -> ', c, 'd -> ', d);
      return {
        id: '321',
        size,
        weight,
        cost(product) {
          return product.size * product.weight;
        },
      };
    },
  },
};

module.exports = resolvers;
