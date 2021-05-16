import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

function Booklet() {
  return (
    <section className="booklet">
      <div className="booksection">
        <Book 
            img = "https://m.media-amazon.com/images/I/51mY5a8y1FL._AC_UY218_.jpg"
            title = "Liberal Education and Its Discontents: The Crisis in the Indian University"
            author = "Shashikala Srinivasan"
          />

        <Book
            img = "https://m.media-amazon.com/images/I/51hPqwsUw5L._AC_UY218_.jpg"
            title = "A text Book of Ayurvedic Physiology ( sharir Kriya Vijnana)"
            author = "Prof. S. B. Kotur and Dr. Shashikala Kotur"
        />
      </div>
        
    </section>
  )
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <p>{props.author}</p>
    </article>
  )
}

ReactDOM.render(<Booklet/>, document.getElementById('root'));
