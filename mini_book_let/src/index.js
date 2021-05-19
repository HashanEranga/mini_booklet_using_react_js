import React from 'react'
import ReactDOM from 'react-dom'
import Book from './Book';
import './index.css'

function Booklet() {
  return(
    <section className="booklet">
      
      {books.map((book)=>{
        return (
          <Book 
            book={book}
          />
        )
      })}
    </section>
  )
}

const books = [
  {
    img : "https://images-na.ssl-images-amazon.com/images/I/41+2DiWeWAS._AC_SX184_.jpg",
    title : "The Premonition: A Pandemic StoryThe Premonition: A Pandemic Story ",
    author : "Michael Lewis"
  },
  
  {
    img : "https://images-na.ssl-images-amazon.com/images/I/51zMKWZCRfS._AC_SX184_.jpg",
    title : "The Good Sister: A NovelThe Good Sister: A Novel",
    author : "Sally Hepworth"
  },
];

ReactDOM.render(<Booklet/>, document.getElementById('root'));
