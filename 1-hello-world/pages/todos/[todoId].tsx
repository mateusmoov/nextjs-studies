import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

interface ObjectApi {
  userId: number;
  id: number;
  title: string;
  completed: string;
}

interface Paths extends ParsedUrlQuery {
  todoId: string;
}

interface Props {
  todo: ObjectApi;
}

export const getStaticProps = async (context: GetStaticPropsContext<Paths>) => {
  const { params } = context;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params?.todoId}`
  );
  const todo = await data.json();
  return {
    props: { todo },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  const paths = data.map((todo: ObjectApi) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });
  return { paths, fallback: false };
};

const Todo = ({ todo }: Props) => {
  return (
    <>
      <Link href="/">
        <a>Voltar</a>
      </Link>
      <h1>Exibindo o todo: {todo.id}</h1>
      <h3>{todo.title}</h3>
    </>
  );
};

export default Todo;
