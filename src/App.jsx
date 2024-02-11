import { useEffect, useState, useReducer } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
// import { TYPES } from "./actions/todoActions";
import { todoReducer, initialState, todoInit } from "./reducers/todoReducer";

const themes = {
  light: {
    "--main-background": "hsl(236, 33%, 92%)",
    "--second-background": "hsl(0, 0%, 98%)",
    "--main-font-color": "hsl(235, 19%, 35%)",
    "--second-font-color": "hsl(236, 9%, 61%)",
    "--third-font-color": "hsl(233, 11%, 84%)",
    "--line-color": "hsl(233, 11%, 84%)",
  },

  dark: {
    "--main-background": "hsl(235, 21%, 11%)",
    "--second-background": "hsl(235, 24%, 19%)",
    "--main-font-color": "hsl(234, 39%, 85%)",
    "--second-font-color": "#777a92",
    "--third-font-color": "#393a4c",
    "--line-color": "#4d5066",
  },
};

function App() {
  const [view, setView] = useState("");
  const [theme, setTheme] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState, todoInit);
  const data = state;

  useEffect(() => {
    let localData = {};
    if (localStorage.getItem("todo-data")) {
      localData = JSON.parse(localStorage.getItem("todo-data"));
    } else {
      const userPrefersLight =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches;
      const initialTheme = userPrefersLight ? "light" : "dark";

      localData = {
        theme: initialTheme,
        view: "all",
      };

      localStorage.setItem("todo-data", JSON.stringify(localData));
    }
    setView(localData.view);
    setTheme(localData.theme);
  }, []);

  if (view !== "" && theme !== "") {
    let newData = {
      theme,
      view,
    };
    localStorage.setItem("todo-data", JSON.stringify(newData));
  }

  localStorage.setItem("data", JSON.stringify(state));

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
