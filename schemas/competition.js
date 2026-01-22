// competition.js
export const typeDef = `
  type Competition {
    id: String!
    category: String!
    users: [Users]
    segments: [Segments]
  }
`;

export const resolvers = {
  Competition: {
    eventr: () => { },
  }
}