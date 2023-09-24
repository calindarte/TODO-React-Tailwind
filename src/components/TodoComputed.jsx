const TodoComputed = ({computedItemLeft, clearComputed}) => {
  return (
    <section className="flex justify-between p-4 text-gray-400 bg-white rounded-b-md dark:bg-gray-700 transition-all duration-1000">
      <span>{computedItemLeft} items left</span>
      <button onClick={()=>clearComputed()}>Clear Completed</button>
    </section>
  );
};

export default TodoComputed;
