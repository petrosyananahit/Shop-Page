import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function Layout({children}) {
  return (
    <div>
    <Header/>
    <main>{children}</main>
    <div style={{marginTop:"50px"}}>
    <Footer/>
    </div>
    </div>
  )
}

export default Layout

