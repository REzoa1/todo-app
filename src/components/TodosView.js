import todosStyles from "./TodosView.module.css";
import React, { useEffect } from "react";
import { TodoList } from "./TodoList/TodoList";
import { fetchTodos, selectTodosData } from "../store/slices/todos";
import { useDispatch, useSelector } from "react-redux";
import { Preloader } from "./Preloader/Preloader";
import { AddForm } from "./AddForm/AddForm";
import { Header } from "./Header/Header";

export const TodosView = () => {
  const { todosList, isLoading } = useSelector(selectTodosData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div className="container">
      <Header />
      <AddForm todosList={todosList} isLoading={isLoading} />
      <div className={todosStyles.form}>
        <div className={todosStyles.list}>
          <Preloader isLoading={isLoading}>
            <TodoList />
          </Preloader>
        </div>
      </div>
    </div>
  );
};
