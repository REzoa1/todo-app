import React, { useState } from "react";
import { Table } from "antd";
import { deleteTodo, selectTodosData } from "../../store/slices/todos";
import { useDispatch, useSelector } from "react-redux";
import {
  copyText,
  deleteConfirmation,
  deleteSelectedButton,
  deleteTodoButton,
} from "../../utils/helpers";

export const TodoList = () => {
  const { todosList } = useSelector(selectTodosData);
  const dispatch = useDispatch();
  const handleDeleteTodo = (postId) => {
    dispatch(deleteTodo(postId));
  };
  const handleDeleteList = (selected) => {
    deleteConfirmation(dispatch, selected);
  };
  const [selectedKey, setSelectedKey] = useState([]);
  const onSelectChange = (selectedKey) => {
    setSelectedKey(selectedKey);
  };
  const rowSelection = {
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: "Название",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (value) => copyText(value),
    },
    {
      title: () => deleteSelectedButton(selectedKey, handleDeleteList),
      width: "26%",
      height: "20%",
      align: "right",
      render: (record) => deleteTodoButton(record, handleDeleteTodo),
    },
  ];

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={todosList}
      pagination={{
        pageSize: 5,
        size: "small",
        position: ["bottomCenter"],
      }}
    />
  );
};
