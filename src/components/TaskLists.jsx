import React from 'react'

const TaskLists = ({ todoList }) => {
  const currentTasksCount = todoList.length;
  const completedTasksCount = todoList.filter(todo => todo.isComplete).length;

  return (
    <div className='flex gap-4 mb-4 bg-gray-100 rounded-lg p-4'>
      {/* Current Tasks Count */}
      <div className='flex-1 text-center'>
        <h2 className='text-xl font-medium text-gray-700 mb-2'>Current Tasks</h2>
        <p className='text-2xl font-bold text-blue-600'>{currentTasksCount}</p>
      </div>
      {/* Completed Tasks Count */}
      <div className='flex-1 text-center'>
        <h2 className='text-xl font-medium text-gray-700 mb-2'>Completed Tasks</h2>
        <p className='text-2xl font-bold text-green-600'>{completedTasksCount}</p>
      </div>
    </div>
  )
}

export default TaskLists