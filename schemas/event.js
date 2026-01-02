// climb.js
export const typeDef = `
  type Event {
    id: String!
    firstName: String
    lastName: String
    books: [Book]
  }
`;

export const resolvers = {
  Event: {
    user: () => { },
  }
}