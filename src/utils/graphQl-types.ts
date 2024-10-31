export type User = {
    userId: String,
    name: String,
    pass: String,
    tasks: Task[]
}

export type Task = {
    taskId: String,
    title: String,
    description: String,
    tags: Tag[]
}

export type Tag = {
    name: String
}

export interface MyContext {
    dataSources: {
      Users: User[];
      Tasks: Task[];
    };
  }