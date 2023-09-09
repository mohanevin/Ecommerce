import React from 'react'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/CommonSection'
import { Col, Container, Row, Table } from 'reactstrap'
import { useSelector,useDispatch } from 'react-redux'
import '../styles/cart.css'
import { deleteItem } from '../redux/slice/cartSlice'
import {Link} from 'react-router-dom'

const Cart = () => {
  const cartItems=useSelector((store)=>store.cart.cartItems)
  const dispatch=useDispatch()
  const deleteProduct=(id)=>{
    dispatch(deleteItem(id))
  }
  const total=useSelector((store)=>store.cart.totalPrice)
  
  return (
    <Helmet name="Cart">
        <CommonSection title="Shopping cart" /> 
        <section>
          <Container>
            
              {cartItems.length===0?<h2 className='fs-4 text-center m-5'>No items added to the cart</h2>:
              <Row>
              <Col lg="9" md="9">
                <Table className='table bordered m-5'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item,index)=>{
                      return <tr>
                        <td><img className='product-image' src={item.image} alt='Product'/></td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td><span onClick={()=>deleteProduct(item.id)}><i class="ri-delete-bin-line"></i></span></td>
                      </tr>
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col lg="3" md="3">
                <div className='m-5'>
                  <div className=' d-flex align-items-center justify-content gap-2'>
                    <h5 className='fs-4'>Sub Total</h5>
                    <span className='fs-6 fw-bold'>$ {total}</span>
                  </div>
                    <button className='btn-item'><Link to="/shop">Continue Shopping</Link></button>
                    <button className='btn-item'><Link to="/checkout">Checkout</Link></button>
                </div>
              
            </Col>
            </Row> 
              }
              
              
            
          </Container>
        </section>
    </Helmet>
  )
}

export default Cart