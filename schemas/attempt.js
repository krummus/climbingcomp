// session attempts
// attempt.js
export const typeDef = `
  extend type Query {
    allEvents: [Event]
    findEventByName(name: String!): [Event]
    findEventByGymId(gymid: String!): [Event]
    findEventByLocation(location: String!): [Event]
    findEventByActive(active: Boolean!): [Event]
  }

  type Attempt {
    id: String!
    date: Date!
    user: User!
    climb: Climb!
    Zoned: Boolean
    ZonedAttempts: Int
    Completed: Boolean
    CompletedAttempts: Int
    AdditionalClimbs: Int
    Referee: Boolean
    Refereeid: User
    Refereesign: Boolean
  }
`;

export const resolvers = {
  Attempt: {
    user: () => { },
  }
};