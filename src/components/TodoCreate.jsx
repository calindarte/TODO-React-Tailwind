import { useState } from "react";

const TodoCreate = ({createTodo}) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!title.trim()){
      return setTitle('');
    }
    createTodo(title);
    setTitle('');
    
  }
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-md overflow-hidden px-4 py-3 flex gap-4 items-center dark:bg-gray-700 transition-all duration-1000">
          <span className="rounded-full h-5 inline-block w-5 border-2"></span>
          <input 
          className="outline-none w-full text-gray-400 dark:bg-gray-700 transition-all duration-1000"
          type="text" placeholder="Create a new todo..."
          value={title}
          onChange={e=>setTitle(e.target.value)}
          />
          
        </form>

  )
}

export default TodoCreate