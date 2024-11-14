import moongose from 'moongose';

interface ITask extends moongose.Document {
    title: string;
    description: string;

}

const taskSchema = new moongose.schema<ITask>(
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: false,
        },
    }
);

export const TaskModel = moongose.model('TaskModel', taskSchema);