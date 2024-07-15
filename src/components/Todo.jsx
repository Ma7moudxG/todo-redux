import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/actions";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

const Todo = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      dispatch(addTodo(newTodoText.trim()));
      setNewTodoText("");
    }
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Redux TODO App
      </h2>

      {/* input text + btn */}
      <div className="flex items-center mb-4">
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 
          focus:outline-none focus:border-blue-500 rounded"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 p-3 px-6 ml-4 text-white rounded 
            hover:bg-blue-700 focus:outline-none"
        >
          <BsPlus className="text-white w-full" />
        </button>
      </div>

      {/* filter and search */}
      <div className="flex items-center justify-between flex-col md:flex-row">
        <FilterButton />
        <div className="flex items-center mb-4">
          <input
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            name="addTodoInput"
            id="addTodoInput"
            placeholder="Search Todo"
            className="flex-grow p-2 border-b-2 border-gray-300 
          focus:outline-none focus:border-blue-500 rounded"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 p-3 px-6 ml-4 text-white rounded 
            hover:bg-blue-700 focus:outline-none"
          >
            <BsSearch className="text-white w-full" />
          </button>
        </div>
      </div>

      {/* Todo List */}
      <TodoList />
    </div>
  );
};

export default Todo;
