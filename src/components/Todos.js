import todosStyles from "./Todos.module.css";
import React, { useEffect } from "react";
import { SelectionTable } from "./SelectionTable/SelectionTable";
import { fetchTodos, selectTodosData } from "./../store/slices/todos";
import { useDispatch, useSelector } from "react-redux";
import { Preloader } from "./Preloader/Preloader";
import { AddForm } from "./AddForm/AddForm";
import { Header } from "./Header/Header";

export const Todos = () => {
  const { todosList, isLoading } = useSelector(selectTodosData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch]);
  return (
    <div className="container">
      <Header />
      <AddForm todosList={todosList} />
      <div className={todosStyles.form}>
        <div className={todosStyles.list}>
          <Preloader isLoading={isLoading}>
            <SelectionTable />
          </Preloader>
        </div>
      </div>
    </div>
  );
};
