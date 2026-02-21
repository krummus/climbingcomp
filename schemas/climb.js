// climb.js
export const typeDef = `
  extend type Query {
    allEvents: [Event]
    findEventByName(name: String!): [Event]
    findEventByGymId(gymid: String!): [Event]
    findEventByLocation(location: String!): [Event]
    findEventByActive(active: Boolean!): [Event]
  }

  extend type Mutation {
    addClimb(
      colour: String!
      difficulty: String!
      classificationSys: Boolean
      brand: [Climb]
      style: [User]
      locationsvg: Boolean
      setter: [User]
      athleteAttempts:[Attempts]
      active: 
      startDate: Date
      endDate: Date
      gymId: String
      segmentAdmin: [User]
      userCreated: User
    ): Climb
    editClimb(
      id: String!
      name: String!
      active: Boolean
      climbs: [Climb]
      competitors: [User]
      refereed: Boolean
      startDate: Date
      endDate: Date
    ): Climb
    addClimb(
      climbs: [Climb]
    ): Climb
    removeClimb(
      climb: climbId
    ): Climb
    addCompetitor(
      competitors: User
    ): Climb
    removeCompetitor(
      competitor: User
    ): Climb
    addAdmin(
      admin: User
    ): Climb
    removeAdmin(
      admin: User
    ): Climb
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