import React from 'react'
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
const TodoItem = ({ todo, toggle ,deleteTodo}) => {
  return (

    <div className="card flex justify-between rounded-lg px-2 py-2 my-4  w-full text-[#2E073F] gap-2 cursor-pointer" >
      <div className='flex items-center gap-2'onClick={() => toggle(todo.id)}>
        {
          todo.iscompleted ? <FaRegCheckCircle className='size-5 text-green-600 cursor-pointer hover:scale-110 transition-all' /> : <FaRegCircle className='size-5 text-gray-600 cursor-pointer hover:scale-110 transition-all' />
        }
        <p className={`flex-1 text-sm ${todo.iscompleted ? "line-through" : ""}`}>{todo.text}</p>
      </div>

      <FiTrash className='text-red-600 cursor-pointer hover:scale-110 transition-all' onClick={() => deleteTodo(todo.id)} />

    </div>

  )
}

export default TodoItem