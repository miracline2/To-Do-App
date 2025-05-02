import Card from '@mui/material/Card'
import React from 'react'

interface ItodoListProps {
  id: number,
  value: string,
  isRead: boolean
}

interface ItodosProps {
  todos: ItodoListProps[],
  onDelete: (id: number) => void;
  onCompleted: (id: number) => void;
}

const ToDoList: React.FC<ItodosProps> = ({ todos, onDelete, onCompleted }) => {
  return (
    <Card
      sx={{ minWidth: 274 }}
      className="mt-5 h-[35%] w-[50%] shadow-xl overflow-hidden,  border-2 "
    >
      <p className='md:text-xl text-black pt-5'>💡 List of Task ---- </p>
      {/* Scrollable inner div */}
      <div className="p-5 overflow-y-auto h-full space-y-2 md:space-y-4">
        {todos.map((item) => (
          <div key={item.id} className="flex flex-row items-center justify-around gap-2 md:gap-10 ">
            <input
              className="border-2 w-5 h-5 cursor-pointer"
              type="checkbox"
              checked={item.isRead}
              onChange={() => onCompleted(item.id)}
            />
            <h1
              className={`flex-1 text-black text-sm md:text-xl ${
                item.isRead ? 'line-through text-gray-500' : ''
              }`}
            >
              {item.value}
            </h1>
            <button
              className="text-red-600 font-bold hover:underline"
              onClick={() => onDelete(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ToDoList;
