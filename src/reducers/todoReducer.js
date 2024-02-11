import { TYPES } from "../actions/todoActions";

export const initialState = [
  {
    id: "1",
    task: "Complete online JavaScript course",
    completed: true,
  },
  {
    id: "2",
    task: "Jog around the park 3x",
    completed: false,
  },
  {
    id: "3",
    task: "10 minutes meditation",
    completed: false,
  },
  {
    id: "4",
    task: "Read for 1 hour",
    completed: false,
  },
  {
    id: "5",
    task: "Pick up groceries",
    completed: false,
  },
  {
    id: "6",
    task: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

export const todoInit = () => {
  return JSON.parse(localStorage.getItem("data")) || initialState;
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_ITEM: {
      return [...state, action.newItem];
    }
    case TYPES.DELETE_ITEM: {
      return state.filter((el) => el.id !== action.id);
    }
    case TYPES.UPDATE_ITEM: {
      return state.map((el) => (el.id === action.item.id ? action.item : el));
    }
    case TYPES.CLEAR_COMPLETED: {
      return state.filter((el) => el.completed === false);
    }
    case TYPES.REORDER_LIST: {
      const idxSource = state.indexOf(action.itemSource);
      const idxDestination = state.indexOf(action.itemDestination);

      const result = [...state];
      const [removed] = result.splice(idxSource, 1);
      result.splice(idxDestination, 0, removed);
      return result;
    }
    default:
      return state;
  }
};
