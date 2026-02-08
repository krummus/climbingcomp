// competition.js
export const typeDef = `
  extend type Query {
    allCompetitions: [Competition]
    findCompetitionByName(name: String!): [Event]
    findCompetitionById(id: String!): [Event]
    findCompetitionByGymId(id: String!): [Event]
    findCompetitionByEventId(id: String!): [Event]
    findCompetitionByActive(active: Boolean!): [Event]
    findCompetitionByUserId(id: String!): [Event]
  }

  extend type Mutation {
    addCompetition(
      name: String!
      category: String
      segments: [Segment]
      competitionAdmin: [User]
      competitionReferee: [User]
      startDate: Date
      endDate: Date
    ): Competition
    editCompetition(
      name: String!
      category: String
      segments: [Segment]
      competitionAdmin: [User]
      competitionReferee: [User]
      startDate: Date
      endDate: Date
    ): Competition
    addModerator:(
      userId: User!
    ): Competition
    addAdmin: (
      userId: User!
    ): Competition
  }

  type Competition {
    id: String!
    category: String!
    users: [Users]
    segments: [Segments]
    competitionAdmin: [User]
    competitionReferee: [User]
    startDate: Date
    endDate: Date
    active: Boolean!
  }
`;

export const resolvers = {
  Competition: {
    eventr: () => { },
  }
}