import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';

function Cards() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://bookstore.cyclic.app/api/books/book');
        setBookData(response.data); 
        console.log(response)
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
   
    fetchData();
  }, []);

  return (
    <>
    <div className='flex w-full flex-wrap '>

      {bookData.map((book) => (
        <div key={book.id} className="max-w-sm ml-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <div className="flex items-center justify-center">
  <img className="rounded-lg w-64 h-72 object-cover" src={book.image} alt={book.title} />
</div>
          <div className="p-5">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
              </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.description}</p>
            <div className="flex gap-3">
  <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {book.edition}
  </div>
  <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {book.issuedate}
  </div>
  <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {book.author}
  </div>
</div>
          </div>
        </div>
      ))}
      
    </div>
    <Footer/>
    </>
  );
}

export default Cards;
