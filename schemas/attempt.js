// attempt.js
export const typeDef = `
  type Attempt {
    id: String!
    firstName: String
    lastName: String
    books: [Book]
  }
`;

export const resolvers = {
  Attempt: {
    user: () => { },
  }
};