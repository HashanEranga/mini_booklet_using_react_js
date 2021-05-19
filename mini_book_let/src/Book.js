import React from 'react'

function Book(props) {
    const {img, title, author, children } = props;
    return (
        <div className="book">
            
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{author}</p>
            {children}
        </div>
    )
}

export default Book
