import React, { useEffect, useState } from 'react'
import Helmet from '../components/helmet/Helmet'
import { Container,Row,Col,TabPane ,Nav,NavItem,NavLink,TabContent} from 'reactstrap'
import products from '../assets/data/products'
import { useParams } from 'react-router-dom'
import CommonSection from '../components/CommonSection'
import '../styles/product-details.css'
import { motion } from 'framer-motion'
import ProductList from '../components/ProductList'


const ProductDetails = () => {
  const [tab,settab]=useState("1")
  const [similarProducts,setSimilarProducts]=useState([])
  const {id}=useParams()
  const product=products.find((item)=>item.id===id)
  useEffect(()=>{
    const filterarr=products.filter((item)=>item.category===product.category)
    setSimilarProducts(filterarr)
  },[])
  
  return (
    <Helmet name={product.productName}>
      <CommonSection title={product.productName}/>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <img src={product.imgUrl} alt='productImage'/>
          </Col>
          <Col lg="6" md="6">
            <div className='product-details'>
              <h2>{product.productName}</h2>
              <div className='product-rating d-flex align-items-center gap-5 mb-3'>
                <div>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-half-line"></i></span>
                  </div>
                  <p><span>{product.avgRating}</span> ratings</p>
              </div>
              <span className='price'>$ {product.price}</span>
              <p>{product.shortDesc}</p>
              <motion.button whileHover={{scale:1.1}} className='Shop_btn'>Add to cart</motion.button>
            </div>
          </Col>
        </Row>


      </Container>
      <section className='Tab-pane'>
        <Container>
          <Row>
            <Col lg="12" md="12">
            <div>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={tab==="1"?"active":""}
                        onClick={()=>settab("1")}
                      >
                        Description
                      </NavLink>
                    </NavItem>
                    <NavItem >
                      <NavLink
                        className={tab==="2"?"active":""}
                        onClick={()=>settab("2")}
                      >
                        Reviews ({product.reviews.length})
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={tab}>
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                          <p>{product.description}</p>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col sm="6">
                          <ul>
                            {product.reviews.map((review)=>{
                              return <li className='mb-3'>
                                <h6>Name</h6>
                                <span className='review-rating'>{review.rating} (rating)</span>
                                <p className='m-0'>{review.text}</p>
                              </li>
                            })}
                          </ul>
                          
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='m-5'>
        <Container>
          <Row>
            <Col lg="12" md="12">
              <h4> Products You might like</h4>
              
            </Col>
            <ProductList products={similarProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails