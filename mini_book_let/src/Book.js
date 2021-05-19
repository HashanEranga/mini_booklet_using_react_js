import React from 'react'

function Book(props) {
    const {img, title, author } = props.book;
    return (
        <div className="book">
            
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{author}</p>
          
        </div>
    )
}

export default Book
