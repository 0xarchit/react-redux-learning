import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}>Nothing ToDo. Enjoy your day!</p>
    )
  );
};

export default WelcomeMessage;
