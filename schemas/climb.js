// climb.js
export const typeDef = `
  extend type Query {
    allEvents: [Event]
    findEventByName(name: String!): [Event]
    findEventByGymId(gymid: String!): [Event]
    findEventByLocation(location: String!): [Event]
    findEventByActive(active: Boolean!): [Event]
  }

  type Climb {
    id: String!
    colour: String!
    difficulty: Int!
    classificationsys: Int!
    brand: String
    style: String
    locationsvg: String
    setter: [User!]
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