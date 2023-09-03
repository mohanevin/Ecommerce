import React, { useEffect, useState } from 'react'
import Helmet from '../components/helmet/Helmet'
import { Col, Container, Row } from 'reactstrap'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import ProductList from '../components/ProductList'
import products from '../assets/data/products'
import clockimage from '../assets/images/counter-timer-img.png'
import axios from 'axios'
import Clock from '../components/Clock'


const Home = () => {
  let year=new Date().getFullYear()

  const [trendingProducts,settrendingProducts]=useState([])
  const [bestSales,setBestSales]=useState([])
  const [newArrivals,setNewArrivals]=useState([])
  const [wireless,setWireless]=useState([])
  const [popular,setPopular]=useState([])

  useEffect(()=>{
    let trendy=products.filter((item)=>item.category==="chair")
    let best=products.filter((item)=>item.category==="sofa")
    let arrivals=products.filter((item)=>item.category==="mobile")
    let wire=products.filter((item)=>item.category==="wireless")
    let popularitems=products.filter((item)=>item.category==="watch")
    settrendingProducts(trendy)
    setBestSales(best)
    setNewArrivals(arrivals)
    setWireless(wire)
    setPopular(popularitems)
  },[])


  return (
    <Helmet name="Home">
      <section className='hero__section'>
        <Container>
          <Row>
            <Col md="6" lg="6">
              <p>Trending Products in {year}</p>
              <h2>Make your Interior more modern and eligant</h2>
              <p>Discover a wide range of handpicked, living room interior designs and décor ideas at Livspace. We bring you living room designs that are customizable, practical and trendy.</p>
              <button className='Shop_btn'><Link to='/shop'> Shop Now</Link></button>
            </Col>
            <Col md="6" lg="6">
              <img src='https://github.com/codingwithmuhib/Maltimart-ecommerce/blob/start-up/src/assets/images/hero-img.png?raw=true' alt='item'/>
            </Col>
          </Row>
        </Container>
      </section>
      <Services/>
      <section >
        <Container>
          <Row>
            <Col lg='12'>
              <h1 className='text-center'>Trending Products</h1>
            </Col>
            <ProductList products={trendingProducts}/>
          </Row>
          
        </Container>
      </section>
      
      <section className='best-deals'>
        <Container>
          <Row>
            <Col lg='12'>
              <h1 className='text-center'>Best Sales</h1>
            </Col>
            <ProductList products={bestSales}/>
          </Row>
          
        </Container>
      </section>
      
      <section className='clock-timer'>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className='clock-top'>
                <h1 className='text-white fs-6 '>Limited time offer</h1>
              </div>
              <Clock/>
              <button className='btn-clock' ><Link to='/shop'>SHOP NOW</Link></button>
            </Col>
            <Col lg="6" md="6" className='text-end'>
              <img src={clockimage} />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
      <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <h1 className='text-center'>New Arrivals</h1>
            </Col>
            <ProductList products={newArrivals}/>
            <ProductList products={wireless}/>
          </Row>
          
        </Container>
      </section>
      <section>
      <Container>
          <Row>
            <Col lg='12'className='m-5'>
              <h1 className='text-center'>Popular items</h1>
            </Col>
            <ProductList products={popular}/>
          </Row>
          
        </Container>
      </section>
    </Helmet>
  )
}

export default Home