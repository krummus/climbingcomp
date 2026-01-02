// climb.js
export const typeDef = `
  type Climb {
    id: String!
    firstName: String
    lastName: String
    books: [Book]
  }
`;

export const resolvers = {
  Climb: {
    user: () => { },
  }
}