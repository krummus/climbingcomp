// climb.js
export const typeDef = `

  extend type Query {
    allGyms(admin: YesNo): [Gym!]
    findGymByName(name: String!): [Gym]
    findGymById(id: String!): Gym
    findGymByCity(city: String!): [Gym]
  }

  extend type Mutation {
    addGym(
      name: String!
      address: String
      contactno: String
      contactemail: String
      gpslocation: String
      gymmap: String
    ): Gym
    editGym(
      name: String!
      address: String
      contactno: String
      contacntemail: String
      gpslocation: String
      gymmap: String
    ): Gym
    addModerator:(
      userId: User!
    ): Gym
    addAdmin: (
      userId: User!
    ): Gym
  }

  type Gym {
    id: String!
    name: String!
    address: String
    contactno: String
    contactemail: String
    gpslocation: String
    gymmap: String
    events: [Event]
    moderators: [User]
    admin: [User]
  }
`;

export const resolvers = {
  Gym: {
    user: () => { },
  }
}