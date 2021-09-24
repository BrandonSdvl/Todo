import { useState } from 'react';
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

function App() {
  const [data, setData] = useState(initialData)
  const [view, setView] = useState('all')

  return (
    <div className="app">
      <Header data={data} setData={setData} />
      <TodoList data={data} setData={setData} view={view} />
      <Footer data={data} setView={setView} />
    </div>
  );
}

export default App;
