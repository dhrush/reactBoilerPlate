import Todo from './components/Todo.js';
import './App.css';

function App() {
  return(
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Learn React Redux' />
      <Todo text='Learn React Hooks' />
      <Todo text='Learn React Router' />
    </div>
  );
}

export default App;
