import { ReactComponent as Cross } from "../../assets/icon-cross.svg";
import "./TodoItem.scss";

const TodoItem = ({
  itemData,
  handleDeleteItem,
  handleUpdateItem,
  draggableProvided,
}) => {
  const handleChange = (e) => {
    itemData.completed = itemData.completed ? false : true;
    handleUpdateItem(itemData);
  };

  return (
    <li
      className={`todo-item ${
        itemData.completed ? "todo-item--completed" : ""
      }`}
      {...draggableProvided.draggableProps}
      ref={draggableProvided.innerRef}
      {...draggableProvided.dragHandleProps}
      role="option"
      aria-selected={itemData.completed}
    >
      <label className={"todo-item__label"}>
        <input
          className={"checkbox"}
          type="checkbox"
          checked={itemData.completed}
          onChange={handleChange}
          name="completed"
        />
        <span className={"todo-item__text"}>{itemData.task}</span>
      </label>
      <button
        className={"todo-item__delete"}
        onClick={() => handleDeleteItem(itemData.id)}
        title="Delete"
      >
        <Cross />X
      </button>
    </li>
  );
};

export default TodoItem;
