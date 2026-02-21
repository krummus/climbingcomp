// user.js
export const typeDef = `
  extend type Query {
    allUsers: [User]
    findUserByName(name: String!): [Segment]
    findUserById(id: String!): [Segment]
    findUserByCompetitionId(id: String!): [Segment]
    findUserByEventId(id: String!): [Segment]
    findUserByGymId(id: String!): [Segment]
    findUserByActive(active: Boolean!): [Segment]
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
    emergency: Contact
    admin: Boolean
    official: Boolean
    moderator: Boolean
    setter: Boolean
    climbAttempts: [attempts]
    competition: [competitions]
    membershipid: String
    scaid: String
  }
`;

export const resolvers = {
  Query: {
    userCount: () => users.length,
    allUsers: (root, args) => {
      
    }
  },
  User: {
    user: () => { },
  },
  Mutation: {

  }
}