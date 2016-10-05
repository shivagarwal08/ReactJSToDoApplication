import React from 'react';
import ToDosList from './todos-list';
import CreateToDo from './create-todo';

const todos = [
    {
        task: 'make React tutorial',
        isCompleted: false
    },
    {
        task: 'eat dinner',
        isCompleted: true
    }
];
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos
        }

    }
    render() {
        return (
            <div> <h1>React ToDos App</h1>
                <CreateToDo  createTask={this.createTask.bind(this)}/>
                <ToDosList todos={this.state.todos} />
            </div>
        )
    }
    createTask(task) {
        this.state.todos.push (
            {task, isCompleted: false}
        );
        this.setState({todos: this.state.todos});
    }
}
