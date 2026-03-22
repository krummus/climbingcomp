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
  /// needs to change for attempt
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
};