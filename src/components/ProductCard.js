import React from 'react'
import productimg from '../assets/images/arm-chair-01.jpg'
import { Col,CardImg } from 'reactstrap'
import '../styles/productcard.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProductCard = ({product}) => {
  return (
    <Col lg='3' md='3'> 
        <div className='product-item' >
            <motion.div whileHover={{scale:0.9}} className='product-img'>
                <img src={product.imgUrl} alt='product'  />
            </motion.div>
            <div className='product-info p-2'>  
                <h3 className='product_name'><Link to='/shop/1'>{product.productName}</Link></h3>
                <span className=' d-block'>{product.category}</span>
            </div>
            <div className='product_bottom d-flex align-items-center justify-content-between p-2'>
                 <span>Price ${product.price}</span>
                 <motion.span whileTap={{scale:1.1}}><i class="ri-add-line"></i></motion.span>
            </div>
        </div>
    </Col>
  )
}

export default ProductCard