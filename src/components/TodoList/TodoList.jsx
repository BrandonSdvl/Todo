import { useEffect, useState } from "react"
import TodoItem from "../TodoItem/TodoItem"
import './TodoList.scss'

const TodoList = ({ data, setData, view }) => {
    const [dataCopy, setDataCopy] = useState(data)

    const deleteItem = (id) => {
        let newData = data.filter(el => el.id !== id)
        setData(newData)
    }

    const updateItem = (itemData) => {
        let newData = data.map(el => el.id === itemData.id ? itemData : el)
        setData(newData)
    }

    const clearCompleted = () => {
        let newData = data.filter(el => el.completed === false)
        setData(newData)
    }

    useEffect(() => {
        if (view === 'all') {
            setDataCopy(data)
        } else if (view === 'active') {
            setDataCopy(data.filter(el => el.completed === false))
        } else if (view === 'completed') {
            setDataCopy(data.filter(el => el.completed === true))
        }
    }, [view, data])

    return (
        <main className={"todo-list"}>
            {dataCopy.length > 0 ?
                dataCopy.map(el => {
                    return < TodoItem itemData={el} key={el.id} deleteItem={deleteItem} updateItem={updateItem} />
                })
                :
                <p className={"todo-list__message"}>No Data...</p>
            }

            <div className={"todo-list__footer"}>
                <span>{data.length} items left</span>
                <button className={"todo-list__clear"} onClick={clearCompleted}>Clear Completed</button>
            </div>
        </main>
    )
}

export default TodoList
