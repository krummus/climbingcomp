// climb.js
export const typeDef = `
  type Climb {
    id: String!
    colour: String!
    difficulty: Int!
    classificationsys: Int!
    brand: String
    style: String
    locationsvg: String
    setter: [Setter!]
    athletesattempts: Int
    athletescompleted: Int
    active: Boolean!
    startDate: Date!
    endDate: Date!
  }
`;

export const resolvers = {
  Climb: {
    user: () => { },
  }
}