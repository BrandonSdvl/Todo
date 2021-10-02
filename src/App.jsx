import { useEffect, useState } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const initialData = [
  {
    id: '1',
    task: 'Complete online JavaScript course',
    completed: true,
  },
  {
    id: '2',
    task: 'Jog around the park 3x',
    completed: false
  },
  {
    id: '3',
    task: '10 minutes meditation',
    completed: false
  },
  {
    id: '4',
    task: 'Read for 1 hour',
    completed: false
  },
  {
    id: '5',
    task: 'Pick up groceries',
    completed: false
  },
  {
    id: '6',
    task: 'Complete Todo App on Frontend Mentor',
    completed: false
  },
]

const themes = {
  light: {
    '--main-background': 'hsl(236, 33%, 92%)',
    '--second-background': 'hsl(0, 0%, 98%)',
    '--main-font-color': 'hsl(235, 19%, 35%)',
    '--second-font-color': 'hsl(236, 9%, 61%)',
    '--third-font-color': 'hsl(233, 11%, 84%)',
    '--line-color': 'hsl(233, 11%, 84%)',
  },

  dark: {
    '--main-background': 'hsl(235, 21%, 11%)',
    '--second-background': 'hsl(235, 24%, 19%)',
    '--main-font-color': 'hsl(234, 39%, 85%)',
    '--second-font-color': '#777a92',
    '--third-font-color': '#393a4c',
    '--line-color': '#4d5066',
  }
}

function App() {
  let localData = {}

  if (localStorage.getItem('todo-data')) {
    localData = JSON.parse(localStorage.getItem('todo-data'))
  } else {
    const userPrefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = userPrefersLight ? 'light' : 'dark'

    localData = {
      theme: initialTheme,
      data: initialData,
      view: 'all'
    }

    localStorage.setItem("todo-data", JSON.stringify(localData));
  }

  const [data, setData] = useState(localData.data)
  const [view, setView] = useState(localData.view)
  const [theme, setTheme] = useState(localData.theme)

  useEffect(() => {
    let newData = {
      theme,
      data,
      view
    }
    localStorage.setItem("todo-data", JSON.stringify(newData));
  }, [data, view, theme])

  return (
    <div className="app" style={{ ...themes[theme] }}>
      <Header data={data} setData={setData} theme={theme} setTheme={setTheme} />
      <TodoList data={data} setData={setData} view={view} />
      <Footer setView={setView} view={view} />
    </div>

  );
}

export default App;
