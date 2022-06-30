import logo from './logo.svg';
import './App.css';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';
import Todo from './component/Todo';
import Footer from './component/Footer';
import About from './component/About';
import Contact from './component/Contact';
import { Link, Route, Routes } from 'react-router-dom';
import TodoApp from './component/TodoApp';
function App() {
  return (
    <div className='App'>
      {/* <TodoList /> */}
      <div className='navbar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path='/' element={<TodoApp />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
