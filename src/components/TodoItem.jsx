import React from "react";
import IconCheck from "./Icons/IconCheck";
import IconCross from "./Icons/IconCross";

const TodoItem = React.forwardRef(({ todo, updateTodo, deleteTodo, ...props}, ref) => {
  const { id, title, completed } = todo;
  return (
    <article {...props} ref={ref} className="flex items-center gap-4 py-4 px-4 border-b border-b-gray-400">
      <button
        className={`rounded-full h-5 w-5 border-2 flex-none ${
          completed
            ? " bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
            : " inline-block"
        }`}
        onClick={() => updateTodo(id)}
      >
        {completed && <IconCheck />}
      </button>

      <p
        className={`grow dark:text-gray-400 text-gray-600 font-semibold ${
          completed && "line-through font-normal"
        }`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => deleteTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
});

export default TodoItem;
