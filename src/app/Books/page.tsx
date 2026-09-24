import React from "react";
import { BooksType } from "../AllTypes";
import BooksShowPage from "../Components/BooksShowPage";
import Banner from "../Components/Common/Banner";

const fetchBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    return res.json();
  } catch (error) {
    console.error("Error fetching books Data:", error);
    return [];
  }
};
console.log("SERVER URL:", process.env.NEXT_PUBLIC_SERVER_BASE_URL);

const BooksPage = async () => {
  const UseData = await fetchBooks();
  console.log(UseData);
  return (
    <>
      <Banner></Banner>
      <div className="container mx-auto grid grid-cols-3 gap-5 p-5 my-5">
        {UseData.map((Data: BooksType) => (
          <BooksShowPage key={Data.id} Data={Data}></BooksShowPage>
        ))}
      </div>
    </>
  );
};

export default BooksPage;
