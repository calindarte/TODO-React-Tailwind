import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

// const inicialStateTodos =[
//   {id:1, title: "Complete online JavaScript course", completed:true},
//   {id:2, title: "Jog around the park 3x", completed:false},
//   {id:3, title: "10 minutes meditation", completed:false},
//   {id:4, title: "Read for 1 hour", completed:false},
//   {id:5, title: "Pick up groceries", completed:false},
//   {id:6, title: "Complete Todo App on Frontend Mentor", completed:false},
// ]

const inicialStateTodos = JSON.parse(localStorage.getItem("todo")) || [];

const App = () => {
  const [todo, setTodo] = useState(inicialStateTodos);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodo([...todo, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const computedItemLeft = todo.filter((todo) => !todo.completed).length;

  const clearComputed = () => {
    setTodo(todo.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todo;
      case "active":
        return todo.filter((todo) => !todo.completed);
      case "completed":
        return todo.filter((todo) => todo.completed);
      default:
        return todo;
    }
  };

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-800 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000">
      <Header />

      <main className="container mx-auto px-4 mt-8 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todo={filterTodos()}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
        <TodoComputed
          computedItemLeft={computedItemLeft}
          clearComputed={clearComputed}
        />
        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>
      <footer className="mt-8 text-center dark:text-gray-400">
        Drag and drop to rearder list
        <div className="mt-8">
          Challenge by {""}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Carlos Lindarte</a>.
        </div>
      </footer>
    </div>
  );
};

export default App;
