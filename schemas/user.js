// user.js
export const typeDef = `
  type User {
    id: String!
    firstName: String
    lastName: String
    books: [Book]
  }
`;

export const resolvers = {
  User: {
    user: () => { },
  }
}