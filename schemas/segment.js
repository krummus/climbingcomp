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

  type Segment {
    id: String!
    name: name!
    active: Boolean!
    climbs: [Climb]
    competitors: [User]
    refereed: Boolean
    startDate: Date
    endDate: Date
    userCreated: User
    dateAdded: Date
  }
`;

export const resolvers = {
  Segment: {
    user: () => { },
  }
}