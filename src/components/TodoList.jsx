import TodoItem from "./TodoItem";

const TodoList = ({todo, updateTodo, deleteTodo}) => {
  return (
    <div className="bg-white rounded-t-md mt-8 dark:bg-gray-700 transition-all duration-1000">
      {todo.map((todo)=>(
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
      ))}
    </div>
  );
};

export default TodoList;
