import React from 'react';
import { BooksType } from '../AllTypes';
import BooksShowPage from '../Components/BooksShowPage';
import Banner from '../Components/Common/Banner';


const fetchBooks =async()=>{
  const res = await fetch("http://localhost:5000/Books")
  return res.json();
}

const BooksPage =async () => {

  const UseData = await fetchBooks();
  console.log(UseData)
  return (
    
    <>
   <Banner></Banner>
    <div className='container mx-auto grid grid-cols-3 gap-5 p-5 my-5'>
      {
        UseData.map((Data:BooksType)=> <BooksShowPage key={Data.id} Data={Data}></BooksShowPage>)
      }
    </div>
      </>
      
  );
};

export default BooksPage;