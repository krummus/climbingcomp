// user.js
export const typeDef = `
  extend type Query {
    allUsers: [User]
    findUserById(id: String!): [Segment]
    findUserByName(name: String!): [Segment]
    findUsersBySegmentId(id: String!): [Segment]
    findUsersByCompetitionId(id: String!): [Segment]
    findUsersByEventId(id: String!): [Segment]
    findUsersByGymId(id: String!): [Segment]
    findUsersByActive(active: Boolean!): [Segment]
    findUserByUserId(id: String!): [Segment]
    findUserByRefereeId(id: String!): [Segment]
  }  

  extend type Mutation {
    addUser(
      id: String!
      passwordHash: String!
      firstName: String
      lastName: String
      email: String
      emergency: Contact
    ): User
    
    editUser(
      id: String!
      passwordHash: String!
      firstName: String
      lastName: String
      email: String
      emergency: Contact
      scaid: String
    ): User

    editUserAsAdmin(
      id: String!
      admin: Boolean
      official: Boolean
      moderator: Boolean
      setter: Boolean
      climbattempts: [attempts]
      competition: [competitions]
      membershipId: String
      scaid: String
    ): User
    
    addAttempt(
      id: String!
      climbAttempts: [Attempt]
    ): User

    addCompetition(
      id: String!
      competition: [Competition]
    ): User
  }

  type User {
    id: String!
    passwordHash: String!
    firstName: String
    lastName: String
    email: String
    emergencyName: String!
    emergencyContact: String! 
    admin: Boolean
    official: Boolean
    moderator: Boolean
    setter: Boolean
    climbAttempts: [attempts]
    competitions: [competitions]
    membershipid: String
    scaid: String
  }
`;

export const resolvers = {
  /// Needs to change to Users

  Query: {
    allUsers: async () => User.findAll({}),
    findUserById: async (root, args) => User.findAll({id: ['args']}),
    findUsersByName: async (root, args) => User.findAll({name: ['args']}),
    findUsersBySegmentId: async (root, args) => User.findAll({segmentId: ['args']}),
    findUsersByCompetitionId: async (root, args) => User.findAll({competitionId: ['args']}),
    findUsersByEventId: async (root, args) => User.findAll({eventId: ['args']}),
    findUsersByGymId: async (root, args) => User.findAll({gymId: ['args']}),
    findUsersByUserId: async (root, args) => User.findAll({userId: ['args']}),
    findUsersByRefereeId: async (root, args) => User.findAll({refereeId: ['args']}),
    findUsersByActive: async (root, args) => User.findAll({active: ['args']}),
  },

  Mutations: {
    addUser: async (root, args) => {

    },
    editUser: async (root, args) => {

    },
    editUserAsAdmin: async (root, args) => {

    },    
    addAttempt: async (root, args) => {

    },
    addSegment: async (root, args) => {

    },
    addCompetition: async (root, args) => {

    },
    addEvent: async (root, args) => {

    },
  },
  User: {
    id: (root) => root.id,
    passwordHash: (root) => root.colour,
    firstName: (root) => root.firstName,
    lastName: (root) => root.lastName,
    email: (root) => root.email,
    emergencyName: (root) => root.emergencyName,
    emergencyContact: (root) => root.emergencyContact,
    admin: (root) => root.admin,
    moderator: (root) => root.moderator,
    referee: (root) => root.referee,
    setter: (root) => root.setter,
    climbAttempts: (root) => root.climbAttempts,
    competitions: (root) => root.competitions,
    membershipId: (root) => root.membershipId,
    membershipActive: (root) => root.membershipActive,
    scaId: (root) => root.scaId,
  }
}