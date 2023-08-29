import Image from 'next/image'
import { urlfor } from '../lib/client'
import Link from 'next/link'
import React from 'react'

const Product = ({product:{image,name,slug,price}}) => {
  return (
    <div>
      <Link passHref href={`/product/${slug.current}`}>
        <div className='product-card'>
          <Image src={urlfor(image && image[0]).url()} alt='Product' width={250} height={250} className='product-image'/>
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product