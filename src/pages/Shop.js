import React, { useState } from 'react'
import CommonSection from '../components/CommonSection'
import Helmet from '../components/helmet/Helmet'
import { Col, Container,Row } from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductList from '../components/ProductList'

const Shop = () => {
  const [productData,setProductData]=useState(products)
  const filterByproduct= (e)=>{
    const filter=e.target.value
    const filterarr=products.filter((item)=>item.category===filter)
    setProductData(filterarr)
  }

  const handleChange=(e)=>{
    const search=e.target.value
    const filterarr=products.filter((item)=>item.productName.toLowerCase().includes(search.toLowerCase()))
    setProductData(filterarr)
  }
  return (
    <Helmet name="Shop">
      <CommonSection title="Products"/>
      <section className='shop-section'>
      <Container>
        <Row>
          <Col lg="3" md="3">
            <div className='filter-widget'>
                <select onChange={filterByproduct}>
                  <option>Filter by products</option>
                  <option value="sofa">Sofa</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="mobile">Mobile</option>
                  <option value="wireless">Wireless</option>
                </select>
            </div>
          </Col>
          <Col lg="3" md="3">
          <div className='filter-widget'>
            <select>
              <option>sort by category</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className='search-box'>
              <input type='search' placeholder='search....' onChange={handleChange}/>
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productData.length===0?<h1 className='text-center  m-5'>No products found</h1>: <ProductList products={productData} />}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop