import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [
    {
      name: 'buy milk',
      dueDate: '12/12/12',
    },
    {
      name: 'Go College',
      dueDate: '12/12/12',
    },
    {
      name: 'Learn Python',
      dueDate: '12/12/12',
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;