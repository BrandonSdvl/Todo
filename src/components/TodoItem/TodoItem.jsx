import { ReactComponent as Cross } from '../../assets/icon-cross.svg'
const TodoItem = () => {
    return (
        <div>
            <input type="checkbox" id="item1" />
            <label htmlFor="item1">Read for 1 hour</label>
            <button><Cross /></button>
        </div>
    )
}

export default TodoItem
