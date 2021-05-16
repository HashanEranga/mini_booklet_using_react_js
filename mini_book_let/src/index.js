import React from 'react'
import ReactDOM from 'react-dom'
import Book from './Book'
import './index.css'

function Booklet() {
  return (
    <section className="booklet">
      <Book 
        img = {firstBook.img}
        title = {firstBook.title}
        author = {firstBook.author}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni illo omnis asperiores earum ex ipsa id quidem non doloremque.</p>
      </Book>
        
      <Book
        img = "https://m.media-amazon.com/images/I/51mY5a8y1FL._AC_UY218_.jpg"
        title = "Liberal Education and Its Discontents: The Crisis in the Indian University"
        author = "Shashikala Srinivasan"
      />

    </section>

  )
}

const firstBook = {
  img : "https://m.media-amazon.com/images/I/51mY5a8y1FL._AC_UY218_.jpg",
  title : "Liberal Education and Its Discontents: The Crisis in the Indian University",
  author : "Shashikala Srinivasan"
}

ReactDOM.render(<Booklet/>, document.getElementById('root'));
