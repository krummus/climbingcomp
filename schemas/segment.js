// segment.js
export const typeDef = `
  type Segment {
    id: String!
    name: name!
    active: Boolean!
    climbs: [Climbs]
    competitors: [User]
    refereed: Boolean
  }
`;

export const resolvers = {
  Segment: {
    user: () => { },
  }
}