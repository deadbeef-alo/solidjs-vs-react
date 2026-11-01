import { render } from '@solidjs/web';
import { createSignal, createStore, For } from 'solid-js';

let nextId = 3;

export default function Todos() {
  const [text, setText] = createSignal('');
  const [todos, setTodos] = createStore([
    { id: 1, text: 'Learn signals', done: true },
    { id: 2, text: 'Learn stores', done: false },
  ]);

  const addTodo = (text) =>
    setTodos((draft) => {
      draft.push({ id: nextId++, text, done: false });
    });

  const toggleTodo = (id) =>
    setTodos((draft) => {
      // Find the todo and flip its done flag.
    });

  const clearDone = () =>
    setTodos((list) => list); // Return the todos that aren't done.

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!text().trim()) return;
          addTodo(text());
          setText('');
        }}
      >
        <input
          placeholder="What needs doing?"
          value={text()}
          onInput={(event) => setText(event.currentTarget.value)}
        />
        <button>Add</button>
      </form>
      <For each={todos}>
        {(todo) => (
          <label style={{ display: 'block' }}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />{' '}
            <span style={{ 'text-decoration': todo.done ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
          </label>
        )}
      </For>
      <button onClick={clearDone}>Clear done</button>
    </>
  );
}
