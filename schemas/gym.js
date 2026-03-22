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
  ///// Needs to change to Gym
  Query: {
    allClimbs: async () => Climb.findAll({}),
    findClimbById: async (root, args) => Climb.findAll({id: ['args']}),
    findClimbsByGymId: async (root, args) => Climb.findAll({gymId: ['args']}),
    findClimbsByColour: async (root, args) => Climb.findAll({colour: ['args']}),
    findClimbsByDifficulty: async (root, args) => Climb.findAll({difficulty: ['args']}),
    findClimbsByBrand: async (root, args) => Climb.findAll({brand: ['args']}),
    findClimbsBySetter: async (root, args) => Climb.findAll({setter: ['args']}),
    findClimbsByActive: async (root, args) => Climb.findAll({active: ['args']})
  },
  Mutations: {
    addClimb: async (root, args) => {

    },
    editClimb: async (root, args) => {

    },
    removeClimb: async (root, args) => {

    },    
    addAdmin: async (root, args) => {

    },
    removeAdmin: async (root, args) => {

    },
    addAttempt: async (root, args) => {

    },
  },
  Climb: {
    id: (root) => root.id,
    colour: (root) => root.colour,
    difficulty: (root) => root.difficulty,
    classificationSys: (root) => root.classificationSys,
    brand: (root) => root.brand,
    style: (root) => root.style,
    locationSvg: (root) => root.locationSvg,
    setter: (root) => root.setter,
    athleteAttempts: (root) => root.athleteAttempts,
    startDate: (root) => root.startDate,
    endDate: (root) => root.endDate,
    active: (root) => root.active
  }
}