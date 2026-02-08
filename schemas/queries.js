export const typeDef = `
  type Query {
    allUsers(admin: YesNo): [User!]!
    findUserByName(name: String!): User
    findUserById(id: String!): User
    findUsersByCompetition(compId: String!): [User!]!
    findUsersBySegment(segId: String!): [User!]!
    findUsersByClimb: [Users!]!
    findUsersByGym: [Users!]!
    allGyms(admin: YesNo): [Gym!]
    findGymByName(name: String!): [Gym]
    findGymById(id: String!): Gym
    findGymByCity(city: String!): [Gym]


  }
`;