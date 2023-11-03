import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const [filteredData, setFilteredData] = useState([]);

  const handleApi = async () => {
    try {
      const response = await axios.get("https://fakestoreapiserver.reactbd.com/products");
      console.log(response.data, "user");
      setUserData(response.data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    handleApi();
  }, []);

  const handleFilter = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const newData = userData.filter((row) =>
      row.title.toLowerCase().includes(inputValue)
    );
    setFilteredData(newData);
  };

  const currentData = filteredData.length > 0 ? filteredData : userData;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = currentData.slice(firstPostIndex, lastPostIndex);
  const totalPage = currentData.length;

  return (
    <>
      <form action="" className='my-4 text-center border-2 mx-auto w-72'>
        <input type="text" placeholder='Search your product based on Title' onChange={handleFilter} className='border-black w-full py-1 px-2' />
      </form>
      <Card userData={currentPost} />
      <Pagination
        totalPage={totalPage}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Home;
