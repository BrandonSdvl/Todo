import { ReactComponent as Cross } from '../../assets/icon-cross.svg'
import './TodoItem.scss'

const TodoItem = ({ itemData, deleteItem, updateItem, draggableProvided }) => {

    const handleChange = (e) => {
        itemData.completed = itemData.completed ? false : true
        updateItem(itemData)
    }

    return (
        <li className={`todo-item ${itemData.completed ? 'todo-item--completed' : ''}`} {...draggableProvided.draggableProps} ref={draggableProvided.innerRef} {...draggableProvided.dragHandleProps}>
            <label className={"todo-item__label"}>
                <input className={"checkbox"} type="checkbox" checked={itemData.completed} onChange={handleChange} name="completed" />
                <span className={"todo-item__text"}>{itemData.task}</span>
            </label>
            <button className={"todo-item__delete"} onClick={() => deleteItem(itemData.id)}><Cross /></button>
        </li >
    )
}

export default TodoItem
