import React from 'react'
import Book from './Book'

function Booklet() {
    return(
      <section className="booklet">
        
        {books.map((book)=>{
          return (
            <Book 
              key = {book.id}
              {...book}
            />
          )
        })}
      </section>
    )
  }
  
  const books = [
    {
      id: 1,
      img : "https://images-na.ssl-images-amazon.com/images/I/41+2DiWeWAS._AC_SX184_.jpg",
      title : "The Premonition: A Pandemic StoryThe Premonition: A Pandemic Story ",
      author : "Michael Lewis"
    },
    
    {
      id: 2,
      img : "https://images-na.ssl-images-amazon.com/images/I/51zMKWZCRfS._AC_SX184_.jpg",
      title : "The Good Sister: A NovelThe Good Sister: A Novel",
      author : "Sally Hepworth"
    },
  
    {
      id: 3,
      img : "https://images-na.ssl-images-amazon.com/images/I/51zMKWZCRfS._AC_SX184_.jpg",
      title : "The Good Sister: A NovelThe Good Sister: A Novel",
      author : "Sally Hepworth"
    },
  
    {
      id: 4,
      img : "https://images-na.ssl-images-amazon.com/images/I/51zMKWZCRfS._AC_SX184_.jpg",
      title : "The Good Sister: A NovelThe Good Sister: A Novel",
      author : "Sally Hepworth"
    },
  ];

export default Booklet
