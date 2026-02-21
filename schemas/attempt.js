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

  extend type Mutation {
    addAttempt(
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
    ): Attempt
    editAttempt(
      id: String!
      date: Date!
      user: User!
      climb: Climb!
      Zoned: Boolean
      ZonedAttempts: Int
      Completed: Boolean
      CompletedAttempts: Int
      AdditionalClimbs: Int
    ): Attempt
    addReferee(
      Referee: Boolean
      Refereeid: User
      Refereesign: Boolean
    ): Attempt
    editReferee(
      Referee: Boolean
      Refereeid: User
      Refereesign: Boolean
    ): Attempt
  }

  type Attempt {
    id: String!
    date: Date!
    user: User!
    climb: Climb!
    zoned: Boolean
    zonedAttempts: Int
    completed: Boolean
    completedAttempts: Int
    additionalClimbs: Int
    referee: Boolean
    refereeId: User
    refereeSigned: Boolean
  }
`;

export const resolvers = {
  Attempt: {
    user: () => { },
  }
};