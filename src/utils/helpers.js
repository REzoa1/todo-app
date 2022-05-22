import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, message, Modal, Popconfirm } from "antd";
import { deleteTodosList } from "../store/slices/todos";

const { confirm } = Modal;

export const copyText = (value) => {
  return (
    <Button
      type="text"
      onClick={() => {
        message.success("Скопировано");
        navigator.clipboard.writeText(value);
      }}
    >
      {value}
    </Button>
  );
};

export const deleteConfirmation = (dispatch, selected) => {
  confirm({
    title: "Удалить выбранные задачи?",
    okText: "Да",
    okType: "danger",
    cancelText: "Нет",
    onOk() {
      dispatch(deleteTodosList(selected));
    },
  });
};

export const deleteSelectedButton = (selectedKey, handleDeleteList) => {
  if (selectedKey.length > 0)
    return (
      <Button
        type="primary"
        size="small"
        onClick={() => handleDeleteList(selectedKey)}
        danger
      >
        <FontAwesomeIcon icon={faTrash} />
        Удалить выбранное
      </Button>
    );
};

export const deleteTodoButton = (record, handleDeleteTodo) => {
  return (
    <Popconfirm
      title="Удалить задачу?"
      onConfirm={() => handleDeleteTodo(record.key)}
    >
      <Button
        type="text"
        shape="circle"
        icon={<FontAwesomeIcon icon={faXmark} />}
        danger
      />
    </Popconfirm>
  );
};
