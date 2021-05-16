import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Booklet() {
  return(
    <section className="booklet">
      {newList}
    </section>
  )
}

const List = ['hashan', 'eranga', 'perera'];
const newList = List.map((items) => {
  return(
    <h1>{items}</h1>
  )
})

ReactDOM.render(<Booklet/>, document.getElementById('root'));
