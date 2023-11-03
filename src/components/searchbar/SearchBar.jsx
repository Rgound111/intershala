import React from 'react'

const SearchBar = ({userData,setUserData}) => {

    
     const handleFilter =(e)=>{
        const newData = userData.filter((row)=>{
          return row.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setUserData(newData);
        }

  return (
    <div>
      <form action="" className='my-4 text-center border-2 mx-auto w-64'>
      <input type="text" placeholder='Search your product' onChange={handleFilter()} className='border-black w-full py-1 px-2'/>
    </form>
    </div>
  )
}

export default SearchBar
