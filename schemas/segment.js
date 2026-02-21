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
  Segment: {
    user: () => { },
  }
}