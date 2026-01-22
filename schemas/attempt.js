// session attempts
// attempt.js
export const typeDef = `
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