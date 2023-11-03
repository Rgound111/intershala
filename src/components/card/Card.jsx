import React from 'react'

const Card = ({userData}) => {
  return (
    <>
    <div className=' px-72  justify-center grid grid-cols-3 gap-6 m-4 '>
    {userData?.map((user) =>{return(
    <div key={user._id}>
      <div className='border rounded-md'>
      <div className='rounded-t-md w-full h-80 border-slate-950 overflow-hidden'>
        <img className='w-full h-full object-cover  hover:scale-110 duration-300 ' src={user.image} alt="" />
      </div>
      <div className='flex justify-between p-2'>
        <div className='text-base p-1 font-semibold'>The Title : {user.title}</div>
        <div className='text-base p-1 font-semibold'>${user.price}</div>
      </div>
    </div>
    </div>
    )}
    )}
  </div>
  </>
  )
}

export default Card
