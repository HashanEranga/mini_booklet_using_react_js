import React from 'react'

function Book({img, title, author}) {
    const clickHandler = () =>{
        alert('hello world');
    }

    const complexExample = (author) => {
        console.log(author)
    }

    return (
        <div className="book" onMouseOver={()=>console.log(title)}>
            
            <img src={img} alt="" />
            <h1 onClick={() => {
                console.log('hello')
            }}>{title}</h1>
            <p>{author}</p>
            <button type="botton" onClick={clickHandler}>
                reference button
            </button>
            <button type='button' onClick={() => complexExample(author)}>
                more complex button
            </button>
        </div>
    )
}

export default Book
