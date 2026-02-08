export const typeDef = `
  type Mutation {
    id: String!
    name: name!
    active: Boolean!
    climbs: [Climbs]
    competitors: [User]
    refereed: Boolean
  }
`;