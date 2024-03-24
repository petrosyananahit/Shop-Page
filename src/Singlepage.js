import React from 'react'
import { useParams } from 'react-router-dom'
import AboutProduct from './components/AboutProduct/AboutProduct';
import Comments from './components/Comments/Comments'
import Products from './components/Products/Products';
import FilterForComments from './components/FilterForComments/FilterForComments';

function Singlepage() {
 const {id} = useParams()
  return (
    <div>
    <AboutProduct id={+id}/>
    <FilterForComments/>
    <Comments/>
    <h1 style={{textAlign:"center", margin:"50px", fontWeight:"900"}}>YOU MIGHT ALSO LIKE</h1>
    <Products/>
    </div>
  )
}

export default Singlepage