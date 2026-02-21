import React from 'react'
import { FaCheck, FaRegCircle, FaTrash } from 'react-icons/fa'

const TodoItems = ({text, id, isComplete, dateAdded, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        {isComplete ? <FaCheck className='w-7 h-7 text-green-500'/> : <FaRegCircle className='w-7 h-7 text-gray-400'/>}
        <div className='ml-4'>
          <p className={`text-slate-700 text-[17px] ${isComplete ? 'line-through' : ''}`}>{text}</p>
          <p className='text-xs text-gray-500'>Added: {dateAdded}</p>
        </div>
      </div>
      <FaTrash onClick={() => deleteTodo(id)} className='w-7 h-5 cursor-pointer text-gray-500'/>
    </div>
  )
}

export default TodoItems
