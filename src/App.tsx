// We import useState and useEffect from React
// 
// useState = this holds the data that can change
// useEffect = this allows us to run code when certain data changes
import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';


// TODO TYPE 
//
// interface shows TS what a Todo should look like
// 
// every todo needs:
// - an id that is a number
// - a text that is a string
// - a done that is a boolean
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// Helper: runs a state update inside a View Transition.
// flushSync forces React to update the DOM synchronously
// before the browser captures the "after" snapshot —
// without this, the browser sometimes has nothing to animate.
function withViewTransition(update: () => void) {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      flushSync(update);
    });
  } else {
    update();
  }
}

// App component
export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Go gym', done: false }, { id: 2, text: 'Buy groceries', done: false }, { id: 3, text: 'Read a book', done: false }, { id: 4, text: 'Go for a walk', done: false },
  ]);

  // I want a state variable to hold the input value for the new todo item. I will use the useState hook to create this state variable and initialize it with an empty string.
  const [input, setInput] = useState('');

  type Filter = 'all' | 'active' | 'done';
  const [filter, setFilter] = useState<Filter>('all');
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.done;
    if (filter === 'done') return todo.done;
    return true;
  });

  function addTodo() {
    if (input.trim() === '') return;
    const newTodo: Todo = { id: Date.now(), text: input, done: false };
    withViewTransition(() => {
      setTodos(prev => [...prev, newTodo]);
    });
    setInput('');
  }

  function toggleTodo(id: number) {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }
  
  function deleteTodo(id: number) {
    withViewTransition(() => {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    });
  }

  // Filter switchen animeren we ook, zodat de lijst
  // netjes in/uit fadet i.p.v. abrupt te verspringen
  function changeFilter(newFilter: Filter) {
    withViewTransition(() => {
      setFilter(newFilter);
    });
  }

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

  return (
    <main>
      <h1>TOODONE</h1>
      <div className='buttons'>
        <button onClick={() => changeFilter('all')}>All</button>
        <button onClick={() => changeFilter('active')}>Active</button>
        <button onClick={() => changeFilter('done')}>Done</button>
      </div>

      <ul>
      {filteredTodos.map(todo => (
        <li
  key={todo.id}
  style={{ viewTransitionName: `todo-${todo.id}` }}
>      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />

      <span>{todo.text}</span>

      <button onClick={() => deleteTodo(todo.id)}>×</button>
    </li>
))}
</ul>

      <input
  value={input}
  onChange={(event) => {
    setInput(event.target.value);
  }}
  placeholder="new todo..."

  />
<button onClick={addTodo}>Toevoegen</button>
    </main>
  );
}