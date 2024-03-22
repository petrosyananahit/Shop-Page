import React from 'react'
import { useParams } from 'react-router-dom'
import AboutProduct from './components/AboutProduct'
import Comments from './components/Comments'

function Singlepage() {
 const {id} = useParams()
  return (
    <div>
    <AboutProduct id={id}/>
    <Comments/>
    </div>
  )
}

export default Singlepage