import { useDispatch, useSelector } from "react-redux"
import { filterTodos, markAllCommpleted } from "../redux/actions";


const FilterButton = () => {
    const dispatch = useDispatch()

    const currentFilter = useSelector((state) => state.filter);
    const handleFilter = (filterItem) => {
        dispatch(filterTodos(filterItem))
    }
  return (
    <div className="flex items-center mb-2 md:mb-0">
        <select 
            value={currentFilter}
            onChange={(e) => handleFilter(e.target.value)}
            className="bg-white text-sm px-2 py-2 rounded 
            border-b-2 border-gray-300 focus:outline-none w-[100px] md:w-[200px]">
            <option value="ALL">Default</option>
            <option value="COMPLETED">Completed</option>
            <option value="INCOMPLETE">Incomplete</option>
        </select>

        <button 
        onClick={() => dispatch(markAllCommpleted())}
        className="text-sm px-3 py-2 bg-purple-500 text-white ml-3 rounded">Mark All Completed</button>
    </div>
  )
}

export default FilterButton