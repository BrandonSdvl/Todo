import TodoItem from "../TodoItem/TodoItem"
import './TodoList.scss'

const TodoList = ({ data, setData }) => {

    const deleteItem = (id) => {
        let newData = data.filter(el => el.id !== id)
        setData(newData)
    }

    const updateItem = (itemData) => {
        let newData = data.map(el => el.id === itemData.id ? itemData : el)
        setData(newData)
    }

    return (
        <main className={"todo-list"}>
            {data.length > 0 ?
                data.map(el => < TodoItem itemData={el} key={el.id} deleteItem={deleteItem} updateItem={updateItem} />)
                :
                <p>All Clean :))</p>
            }
            <div className={"todo-list__footer"}>
                <span>{data.length} items left</span>
                <button>Clear Completed</button>
            </div>
        </main>
    )
}

export default TodoList
