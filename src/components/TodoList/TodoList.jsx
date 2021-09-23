import TodoItem from "../TodoItem/TodoItem"

const TodoList = () => {
    return (
        <main>
            <TodoItem />
            <div>
                <span>5 items left</span>
                <button>Clear Completed</button>
            </div>
        </main>
    )
}

export default TodoList
