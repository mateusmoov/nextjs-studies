import styles from "../styles/Todos.module.css";

interface ObjectApi {
  userId: number;
  id: number;
  title: string;
  completed: string;
}

interface Props {
  todos: ObjectApi[];
}

export const getStaticProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos = await data.json();
  return {
    props: { todos },
  };
};

const Todos = ({ todos }: Props) => {
  return (
    <>
      <h1>Tarefas para fazer:</h1>
      <ul className={styles.todolist}>
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
