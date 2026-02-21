import React, { useState } from 'react'
import { FaCheck, FaRegCircle, FaTrash, FaEdit } from 'react-icons/fa'

const TodoItems = ({text, id, isComplete, dateAdded, deleteTodo, toggle, updateTodo}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleUpdate = () => {
    setNewText(text);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (newText.trim() !== "") {
      updateTodo(id, newText.trim());
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        {isComplete ? <FaCheck className='w-7 h-7 text-green-500'/> : <FaRegCircle className='w-7 h-7 text-gray-400'/>}
        <div className='ml-4'>
          <p className={`text-slate-700 text-[17px] ${isComplete ? 'line-through' : ''}`}>{text}</p>
          <p className='text-xs text-gray-500'>Added: {dateAdded}</p>
        </div>
      </div>
      <FaEdit onClick={handleUpdate} className='w-7 h-5 cursor-pointer text-blue-500'/>
      <FaTrash onClick={() => deleteTodo(id)} className='w-7 h-5 cursor-pointer text-gray-500'/>
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-80'>
            <h3 className='text-lg font-semibold mb-4'>Update Task</h3>
            <input
              type='text'
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded mb-4'
              placeholder='Enter new task text'
            />
            <div className='flex justify-end gap-2'>
              <button onClick={handleCancel} className='px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400'>
                Cancel
              </button>
              <button onClick={handleSave} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TodoItems
