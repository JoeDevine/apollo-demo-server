const { AuthenticationError, ForbiddenError } = require("apollo-server");
const authErrMessage = "*** you must be logged in ***";

const resolvers = {
  Query: {
    userDetails: () => {
      return {
        id: "1",
        name: "Joe",
        Surname: "Bloggs",
      };
    },
  },
};

module.exports = resolvers;
