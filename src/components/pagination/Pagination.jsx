import React from 'react'

const Pagination = ({ totalPage, postPerPage, setCurrentPage}) => {
    // console.log(totalPage,postPerPage)
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalPage/postPerPage); i++) {
        pages.push(i)
    }
    console.log(pages, "pages") 
    return (
        <div className='flex flex-row justify-center items-center'>
            {pages.map((page, index) => {
                return <><button key={index} onClick={()=>setCurrentPage(page)} className='px-3 py-1 hover:bg-blue-300 active:bg-blue-500 focus:ring-4 border-2 rounded-full m-4 '>{page}</button></>
            })}
        </div>
    )
}

export default Pagination
