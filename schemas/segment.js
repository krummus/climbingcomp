// segment.js
export const typeDef = `
  extend type Query {
    allSegments: [Segment]
    findSegmentByName(name: String!): [Segment]
    findSegmentById(id: String!): [Segment]
    findSegmentByCompetitionId(id: String!): [Segment]
    findSegmentByEventId(id: String!): [Segment]
    findSegmentByGymId(id: String!): [Segment]
    findSegmentByActive(active: Boolean!): [Segment]
    findSegmentByUserId(id: String!): [Segment]
    findSegmentByRefereeId(id: String!): [Segment]
  }  

  extend type Mutation {
    addSegement(
      name: String!
      eventId: String!
      active: Boolean
      climbs: [Climb]
      competitors: [User]
      refereed: Boolean
      startDate: Date
      endDate: Date
      gymId: String
      segmentAdmin: [User]
      userCreated: User
    ): Segment
    
    editSegment(
      id: String!
      name: String!
      active: Boolean
      climbs: [Climb]
      competitors: [User]
      refereed: Boolean
      startDate: Date
      endDate: Date
    ): Segment
    
    addClimb(
      climbs: [Climb]
    ): Segment
    
    removeClimb(
      climb: climbId
    ): Segment
    
    addCompetitor(
      competitors: User
    ): Segment
    
    removeCompetitor(
      competitor: User
    ): Segment
    
    addAdmin(
      admin: User
    ): Segment
    
    removeAdmin(
      admin: User
    ): Segment
  }

  type Segment {
    id: String!
    name: name!
    active: Boolean!
    climbs: [Climb]
    competitors: [User]
    refereed: Boolean
    startDate: Date
    endDate: Date
    segmentAdmin: [User]
    dateAdded: Date
  }
`;

export const resolvers = {
  /// needs to change to segment
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