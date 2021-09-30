import { useEffect, useState } from "react"
import TodoItem from "../TodoItem/TodoItem"
import './TodoList.scss'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

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

    const moveItem = (res) => {
        const { source, destination } = res
        if (!destination) {
            return
        }
        if (source.index === destination.index && source.droppableId === destination.droppableId) {
            return
        }

        if (view !== 'all') {
            let itemIndex = data.indexOf(dataCopy[res.source.index])
            let destinationIndex = data.indexOf(dataCopy[destination.index])

            let newData = reorder(data, itemIndex, destinationIndex)
            let newDataCopy = reorder(dataCopy, source.index, destination.index)

            setDataCopy(newDataCopy)
            setData(newData)

        } else {
            let newData = reorder(data, source.index, destination.index)
            setData(newData)
            setDataCopy(newData)
        }
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = [...list]
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        return result
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
        <DragDropContext onDragEnd={(res) => moveItem(res)} >
            <main className={"todo-list"}>
                <Droppable droppableId="todo">
                    {(droppableProvided) => (
                        <ul {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} className={"todo-list__container"}>
                            {dataCopy.length > 0 ?
                                dataCopy.map((el, index) => {
                                    return (
                                        <Draggable key={el.id} draggableId={el.id} index={index}>
                                            {(draggableProvided) => < TodoItem draggableProvided={draggableProvided} itemData={el} deleteItem={deleteItem} updateItem={updateItem} />}
                                        </Draggable>
                                    )
                                })
                                :
                                <p className={"todo-list__message"}>No Data...</p>
                            }
                            {droppableProvided.placeholder}
                        </ul>
                    )}
                </Droppable>

                <div className={"todo-list__footer"}>
                    <span>{data.length} items left</span>
                    <button className={"todo-list__clear"} onClick={clearCompleted}>Clear Completed</button>
                </div>
            </main>
        </DragDropContext >
    )
}

export default TodoList
