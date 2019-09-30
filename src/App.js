import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoData = [
  {
    task: 'Buy a Computer',
    id: 1,
    completed: false,
  },
  {
    task: 'Apply to Lambda',
    id: 12,
    completed: false,
  },
  {
    task: 'Complete Pre-Course Work',
    id: 123,
    completed: false,
  },
  {
    task: 'Learn to Code',
    id: 1234,
    completed: false,
  },
  {
    task: 'Graduate',
    id: 12345,
    completed: false,
  },
  {
    task: 'Acquire High-Paying Tech Job',
    id: 123456,
    completed: false,
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      name: 'Eric',
      todo: todoData
    };
  }

  toggleItem = id => {
    console.log(id);
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>My Todo App!</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
