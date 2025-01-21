import AppMain from "./components/AppMain";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppMain />
      <AddTodo />
      <div className="items-container">
      <TodoItem />
        <TodoItem />
      </div>
    </center>
  );
}

export default App;
