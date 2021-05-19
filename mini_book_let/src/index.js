import React from 'react'
import ReactDOM from 'react-dom'
import Booklet from './Booklet';
import './index.css'

function Index() {
  return(
    <>
    <Booklet/>
    <Booklet/>
    </>
  )
}

ReactDOM.render(<Index/>, document.getElementById('root'));
