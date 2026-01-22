// climb.js
export const typeDef = `
  type Gym {
    id: String!
    name: String!
    address: String
    contactno: String
    contactemail:String
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