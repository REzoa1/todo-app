import addformStyles from "./AddForm.module.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewTodo } from "../../store/slices/todos";

export const AddForm = ({ todosList }) => {
  const [taskValue, setTaskValue] = useState("");
  const dispatch = useDispatch();
  const handleTaskValue = (e) => {
    setTaskValue(e.target.value);
  };
  const [placeholder, setPlaceholder] = useState("Введите название задачи");
  const handleCreateTodo = (e) => {
    if (taskValue) {
      const newTodo = {
        key: todosList.length + 1,
        name: taskValue,
      };
      dispatch(createNewTodo(newTodo));
      setTaskValue("");
    } else setPlaceholder("Заполните поле");
  };

  return (
    <div className={addformStyles.form}>
      <input
        className={addformStyles.input}
        value={taskValue}
        onChange={handleTaskValue}
        type="text"
        placeholder={placeholder}
      />
      <Button
        className={addformStyles.button}
        type="primary"
        shape="circle"
        onClick={handleCreateTodo}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
};
