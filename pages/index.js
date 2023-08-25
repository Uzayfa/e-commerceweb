import React from 'react'
import {FooterBanner, HeroBanner, Product} from '../components'

const Home = () => {
  return (
   
    <>
      <HeroBanner/>
      <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Beautiful and luxurious bags available at an affordable price</p>
      </div> 
      
      <div className='products-container'>
         {[
           'Product 1',
           'Product 2'
         ].map ((Product) => Product)
         }
      </div>  
      <FooterBanner/>
    </>
  )
}


export default Home