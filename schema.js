const typeDefs = `
  type User {
    firstname: String!
    lastname: String!
    id: ID!
    DOB: Date
    Email: String!
    Verified: Boolean
    Membershipnumber: String
    Admin: Boolean!
    Moderator: Boolean!
    Official: Boolean!
    Setter: Boolean!
    SCANo: String!
    Climbs: String!
  } 

  type Gym {
    title: String!
    published: Int!
    author: Author!
    genres: [String!]!
    id: ID!
  }

  type Referee {
    username: String!
    favouriteGenre: String!
    id: ID!
  }

  type Event {
    value: String!
  }

  type Competition {
    username: String!
    favouriteGenre: String!
    id: ID!
  }

  type CompetitionSegment {
    username: String!
    favouriteGenre: String!
    id: ID!
  }

  type Climbs {
    username: String!
    favouriteGenre: String!
    id: ID!
  }

  type Query {
    bookCount(author: String): Int
    authorCount: Int
    allBooks(author: String, genre: String): [Book]
    allAuthors: [Author]!
    me: User
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int
      genres: [String!]!
    ): Book

	  addAuthor(
      name: String!
      born: Int
	  ): Author

    editAuthor(
      name: String!
      born: Int!
    ): Author

    createUser(
        username: String!
        favouriteGenre: String!
    ): User

    login(
        username: String!
        password: String!
    ): Token  
  }

  type Subscription {
    bookAdded: Book!
  } 
`

module.exports = typeDefs