// competition.js
export const typeDef = `
  type Competition {
    id: String!
    firstName: String
    lastName: String
    books: [Book]
  }
`;

export const resolvers = {
  Competition: {
    eventr: () => { },
  }
}