import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
