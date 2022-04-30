import React from 'react'
import Card from './Card'

function Deals() {
  const cardStyle = {
    cardWidth: 250,
    cardHeight: 250,
    lblHeight: 100,
  }
  const squareStyle = {
    height: 150,
    backgroundColor: 'gray',
    color: 'white',
    font: '25px',
    'text-align': 'centre',
  }
  const labelStyle = {
    fontFamily: 'sans-serif',
    padding: 13,
    margin: 0,
    fcolor: 'black',
    'text-align': 'centre',
  }

  const jobs = [
    {
      img:
        'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=100,width=900/https://d28i4xct2kl5lp.cloudfront.net/product_images/145272_8ea0d7a7-cf24-4308-9129-673a8b0bf8a5.jpg',
      name: 'Airpods Gen 1',
      price: '126.99$',
      desc: 'abc',
      path: '/product/626b31a92f3a3ebfa2b420c3',
    },
    {
      img:
        'https://res.cloudinary.com/bookit/image/upload/v1606231283/products/camera_ridc0i.jpg',
      name: 'Nikon D3500',
      price: '496.95$',
      desc: 'Samsung S-22',
      path: 'product/626b31a92f3a3ebfa2b420c7',
    },
    {
      img:
        'https://res.cloudinary.com/dakvveg0u/image/upload/v1651277133/products/ajddl0nnqxrvnhlkxryj.jpg',
      name: 'Apple Watch 7',
      price: '499$',
      desc: 'Surface Pro',
      path: 'product/626c7d4de5d38dc09b14d522',
    },
    {
      img:
        'https://res.cloudinary.com/dakvveg0u/image/upload/v1651277286/products/s0htjkoqlsbtbvtteoti.jpg',
      name: 'Airtag',
      price: '30$',
      desc: 'Camera',
      path: 'product/626c7de7e5d38dc09b14d534',
    },
    {
      img:
        'https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg',
      name: 'Sandisk',
      price: '45.89$',
      desc: 'Camera',
      path: 'product/626b31a92f3a3ebfa2b420bb',
    },
  ]

  let cardsList = jobs.map((data) => {
    return <Card {...data} {...cardStyle} {...squareStyle} {...labelStyle} />
  })
  return (
    <div class="deal">
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '70px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {cardsList}
      </div>
    </div>
  )
}

export default Deals
