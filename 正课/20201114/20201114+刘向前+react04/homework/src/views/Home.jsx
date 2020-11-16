import React from 'react'
import BannerImage from './img/img4.png'
import Img1 from './img/img_1.png'
import Img2 from './img/img_2.png'

export default function Home() {
  return (
    <div>
      <img src={BannerImage} className='banner' />
      <div className='wrap'>
        <img src={Img1} />
        <img src={Img2} />
      </div>
    </div>
  )
}
