
export const schema = `#graphql
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.    
    # The Types
    type User {
      userId: ID!
      name: String!
      pass: String!
      tasks: [Task]
    }   
    type Task {
      taskId: ID!
      title: String
      description: String
      tags: [Tag]
    }   
    type Tag {
      name: String
    }   
    # The queries 
    type Query {
        getUsers: [User]!
        getTasks: [Task]!
    }
`;