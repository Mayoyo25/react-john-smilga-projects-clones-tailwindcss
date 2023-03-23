import { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [person, setPerson] = useState(data)
  return (
    <main className=' min-h-screen bg-cyan-300  text-gray-900'>
      <div className='flex flex-col justify-center items-center  w-full px-4'>
        <div
          className='flex flex-col p-4 shadow-md
 bg-yellow-300 rounded-sm w-full sm:w-[30rem] lg:w-[35rem] md:w-[33rem] my-20 '
        >
          <h1 className='text-3xl pl-1'>
            <span>{person.length}</span> Birthdays Today
          </h1>
          <List personProp={person} />
          <button
            className={
              'block my-2 bg-pink-900 text-md text-white font-medium py-1 rounded-sm'
            }
            onClick={() => setPerson([])}
          >
            Clear All
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
