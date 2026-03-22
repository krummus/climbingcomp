// climb.js
export const typeDef = `
  extend type Query {
    allClimbs: [Climb]
    findClimbById(id: String!): Climb
    findClimbsByGymId(gymId: String!): [Climb]
    findClimbsByColour(active: Boolean, colour: String): [Climb]
    findClimbsByDifficulty(active: Boolean, difficulty: Integer): [Climb]
    findClimbsByBrand(active: Boolean, brand: String): [Climb]
    findClimbsBySetter(active: Boolean, setter: User): [Climb]
    findClimbsByActive(active: Boolean): [Climb]
  }

  extend type Mutation {
    addClimb(
      colour: String!
      difficulty: String!
      classificationSys: Boolean
      brand: [Climb]
      style: [User]
      locationsvg: Boolean
      setter: [User]
      athleteAttempts:[Attempts]
      active: 
      startDate: Date
      endDate: Date
      gymId: String
      segmentAdmin: [User]
      userCreated: User
    ): Climb
    editClimb(
      id: String!
      name: String!
      active: Boolean
      setters: [User]
      refereed: Boolean
      startDate: Date
      endDate: Date
    ): Climb
    removeClimb(
      climb: climbId
    ): Climb
    addAdmin(
      admin: User
    ): Climb
    addAttempt(
      athleteAttempts: Int
    ): Climb
    removeAdmin(
      admin: User
    ): Climb
  }

  type Climb {
    id: String!
    colour: String!
    difficulty: Int!
    classificationSys: Int!
    brand: String
    style: String
    locationSvg: String
    setter: [User!]
    athletesAttempts: Int
    active: Boolean!
    startDate: Date!
    endDate: Date!
  }
`;

export const resolvers = {
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