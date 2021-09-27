import { ReactComponent as Cross } from '../../assets/icon-cross.svg'
import './TodoItem.scss'

const TodoItem = ({ itemData, deleteItem, updateItem }) => {

    const handleChange = (e) => {
        itemData.completed = itemData.completed ? false : true
        updateItem(itemData)
    }

    return (
        <div className={"todo-item"}>
            <label className={"todo-item__label"}>
                <input className={"checkbox"} type="checkbox" checked={itemData.completed} onChange={handleChange} name="completed" />
                <span className={"todo-item__text"}>{itemData.task}</span>
            </label>
            <button className={"todo-item__delete"} onClick={() => deleteItem(itemData.id)}><Cross /></button>
        </div >
    )
}

export default TodoItem
