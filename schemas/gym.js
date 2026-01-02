// climb.js
export const typeDef = `
  type Gym {
    id: String!
    firstName: String
    lastName: String
    books: [Book]
  }
`;

export const resolvers = {
  Gym: {
    user: () => { },
  }
}