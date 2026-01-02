// segment.js
export const typeDef = `
  type Segment {
    id: String!
    firstName: String
    lastName: String
    books: [Book]
  }
`;

export const resolvers = {
  Segment: {
    user: () => { },
  }
}