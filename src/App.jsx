import { useEffect, useState, useReducer } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { todoReducer, initialState, todoInit } from "./reducers/todoReducer";
import { themes } from "./themes/themes";

function App() {
  const [view, setView] = useState("");
  const [theme, setTheme] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState, todoInit);
  const data = state;

  useEffect(() => {
    const initialView = localStorage.getItem("view") || "all";
    const initialTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark");

    setView(initialView);
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  const filteredData = data.filter((todo) => {
    switch (view) {
      case "all":
        return true;
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default:
        break;
    }
    return null;
  });

  return (
    <div className="app" style={{ ...themes[theme] }}>
      <Header dispatch={dispatch} theme={theme} setTheme={setTheme} />
      <TodoList dispatch={dispatch} data={filteredData} />
      <Footer setView={setView} view={view} />
    </div>
  );
}

export default App;
