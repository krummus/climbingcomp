// climb.js
export const typeDef = `
  type Event {
    id: String!
    name: String!
    gym: Gym!
    competitions: [Competition]
    eventadmin: [User]
    eventreferee: [User]
    startDate: Date
    endDate: Date
  }
`;

export const resolvers = {
  Event: {
    user: () => { },
  }
}