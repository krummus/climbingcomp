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
  Query: {
    allCompetitions: async () => Competition.findAll({}),
    findCompetitionByName: async (root, args) => Competition.findAll({name: ['args']}),
    findCompetitionById: async (root, args) => Competition.findAll({id: ['args']}),
    findCompetitionByGymId: async (root, args) => Competition.findAll({gymId: ['args']}),
    findCompetitionByEventId: async (root, args) => Competition.findAll({EventId: ['args']}),
    findCompetitionByActive: async (root, args) => Competition.findAll({active: ['args']}),
    findCompetitionByUserId: async (root, args) => Competition.findAll({userId: ['args']}),
  },
  Mutations: {
    addCompetition: async (root, args) => {

    },
    editCompetition: async (root, args) => {

    },
    addModerator: async (root, args) => {

    },
    addAdmin: async (root, args) => {

    }
  },
  Competition: {
    id: (root) => root.id,
    category: (root) => root.category,
    users: (root) => root.users,
    segments: (root) => root.segments,
    competitionAdmin: (root) => root.competitionAdmin,
    competitionReferee: (root) => root.competitionReferee,
    startDate: (root) => root.startDate,
    endDate: (root) => root.endDate,
    active: (root) => root.active
  }

}
