import { urlfor } from '../lib/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterBanner = ({footerBanner: {discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, desc, image}}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link passHref href={`/products/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <div className='footer-banner-image'>
          <Image src={urlfor(image).url()} alt='Footer Banner' width={450} height={450} />
        </div>
      </div>
    </div>
  )
}

export default FooterBanner