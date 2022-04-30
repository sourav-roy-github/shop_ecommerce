import React, { Fragment, useState, useEffect } from 'react'
import Pagination from 'react-js-pagination'
import Slider from 'rc-slider'
//imported from the rc-slider official page
import 'rc-slider/assets/index.css'

import MetaData from './layout/MetaData'
import Product from './product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import Loader from './layout/Loader'
import { useAlert } from 'react-alert'
import { useParams } from 'react-router-dom'
import Carouse from './Carousel'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Landin.css'
import './button.css'
import jQuery from 'jquery'
import Deals from './Deals'
import Footer from './layout/Footer'

setInterval(function time() {
  var d = new Date()
  var hours = 24 - d.getHours()
  var min = 60 - d.getMinutes()
  if ((min + '').length == 1) {
    min = '0' + min
  }
  var sec = 60 - d.getSeconds()
  if ((sec + '').length == 1) {
    sec = '0' + sec
  }
  jQuery('#the-final-countdown p').html(hours + ':' + min + ':' + sec)
}, 1000)

function Land({ match }) {
  return (
    <div class="main">
      <Carouse></Carouse>
      <div class="contain">
        <Link to={`/`} class="animated-button1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Shop Now
        </Link>
      </div>

      <div class="banner">
        <div class="timetag">
          <h3 class="heading" id="the-final-countdown">
            Flash deals :{' '}
          </h3>
          <div class="time" id="the-final-countdown">
            <p></p>
          </div>
        </div>
        <div class="one">
          <div class="maindeal">
            <Deals></Deals>
          </div>
        </div>
        <h1 class="dealtag2">Summer is here... Celebrate with us</h1>
        <div class="two">
          <img src=".\images\Canva_celebration.png" class="canimage"></img>
          <img src=".\images\Canva_coupon.png" class="canimage"></img>
        </div>
        <div class="dealtag3">
          <h1>New arrivals</h1>
        </div>
        <div class="vidwrap">
          <iframe
            class="v1"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UO1adUeb04s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <iframe
            class="v2"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Z2MyXuHstIs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default Land
