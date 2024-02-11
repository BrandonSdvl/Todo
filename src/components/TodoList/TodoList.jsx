import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "../StrictModeDroppable/StrictModeDroppable";
import { TYPES } from "../../actions/todoActions";

const TodoList = ({ data, dispatch }) => {
  const handleDeleteItem = (id) => {
    dispatch({ type: TYPES.DELETE_ITEM, id });
  };

  const handleUpdateItem = (item) => {
    dispatch({ type: TYPES.DELETE_ITEM, item });
  };

  const handleClearCompleted = () => {
    dispatch({ type: TYPES.CLEAR_COMPLETED });
  };

  const moveItem = (res) => {
    const { source, destination } = res;

    dispatch({
      type: TYPES.REORDER_LIST,
      itemSource: data[source.index],
      itemDestination: data[destination.index],
    });
  };

  return (
    <>
      <main className={"todo-list"}>
        <DragDropContext onDragEnd={(res) => moveItem(res)}>
          <StrictModeDroppable droppableId="todo">
            {(droppableProvided) => (
              <ul
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                className={"todo-list__container"}
                role="listbox"
              >
                {data.length > 0 ? (
                  data.map((el, index) => (
                    <Draggable
                      key={el.id}
                      draggableId={el.id.toString()}
                      index={index}
                    >
                      {(draggableProvided) => (
                        <TodoItem
                          draggableProvided={draggableProvided}
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                          itemData={el}
                          handleDeleteItem={handleDeleteItem}
                          handleUpdateItem={handleUpdateItem}
                        />
                      )}
                    </Draggable>
                  ))
                ) : (
                  <p className={"todo-list__message"}>No Data...</p>
                )}
                {droppableProvided.placeholder}
              </ul>
            )}
          </StrictModeDroppable>
        </DragDropContext>
        <div className={"todo-list__footer"}>
          <span>{data.length} items left</span>
          <button className={"todo-list__clear"} onClick={handleClearCompleted}>
            Clear Completed
          </button>
        </div>
      </main>
    </>
  );
};

export default TodoList;
