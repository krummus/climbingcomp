// user.js
export const typeDef = `
  type User {
    id: String!
    passwordHash: String!
    firstName: String
    lastName: String
    email: String
    emergency: Contact
    admin: Boolean
    official: Boolean
    moderator: Boolean
    setter: Boolean
    climbattempts: [attempts]
    competition: [competitions]
    membershipid: String
    scaid: String
  }
`;

export const resolvers = {
  Query: {
    userCount: () => users.length,
    allUsers: (root, args) => {
      
    }
  },
  User: {
    user: () => { },
  },
  Mutation: {

  }
}