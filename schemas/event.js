// climb.js
export const typeDef = `
  extend type Query {
    allEvents: [Event]
    findEventByName(name: String!): [Event]
    findEventByGymId(gymid: String!): [Event]
    findEventByLocation(location: String!): [Event]
    findEventByActive(active: Boolean!): [Event]
  }    

  extend type Mutation {
    addEvent(
      name: String!
      gymId: String
      eventadmin: User
    ): Event
    editEvent(
      name: String!
      address: String
      contactno: String
      contacntemail: String
      gpslocation: String
      gymmap: String
      startDate: Date
      endDate: Date
      active: Boolean
    ): Event
    addEventModerator:(
      userId: User!
    ): Event
    addEventAdmin: (
      userId: User!
    ): Event
  }

  type Event {
    id: String!
    name: String!
    gym: Gym!
    competitions: [Competition]
    eventadmin: [User]
    eventreferee: [User]
    startDate: Date
    endDate: Date
    active: Boolean
  }
`;

export const resolvers = {
  Event: {
    user: () => { },
  }
}