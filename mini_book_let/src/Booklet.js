import React from 'react'
import Book from './Book'
import { books } from './BookList'

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
  

export default Booklet
