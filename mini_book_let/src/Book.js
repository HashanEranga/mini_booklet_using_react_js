import React from 'react'

function Book({img, title, author, children}) {
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
