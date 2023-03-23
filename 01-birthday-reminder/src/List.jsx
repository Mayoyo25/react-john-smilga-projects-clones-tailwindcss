const List = ({ personProp }) => {
  return (
    <>
      {personProp.map((person) => {
        const { id, name, image, age } = person
        return (
          <div className='grid grid-cols-[auto,1fr] py-2' key={id}>
            <div className='mb-3 '>
              <img className='w-16 h-16 rounded-full' src={image} alt={name} />
            </div>
            <div className='flex flex-col justify-center px-4'>
              <h2 className='text-xl font-medium'>{name}</h2>
              <p className='text-md font-light text-gray-900'>{age} years</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default List
