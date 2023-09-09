import React from 'react'
import Helmet from '../components/helmet/Helmet'
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import '../styles/checkout.css'
import CommonSection from '../components/CommonSection'

const Checkout = () => {
  const totalQuantity=useSelector((store)=>store.cart.totalQuantity)
  const totalcost=useSelector((store)=>store.cart.totalPrice)
  return (
    <Helmet name="checkout">
      <CommonSection title="Checkout" />
      <section className='m-5'>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <h3 className='m-2'>Billing information</h3>
              <Form className='m-3'>
                <FormGroup>
                  <Input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup>
                  <Input type="email" placeholder="Enter your mail ID" />
                </FormGroup>
                <FormGroup>
                  <Input type="tel" placeholder="Enter your Phone n0" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4" md="4" >
              <div className='checkout-section'>
                <h6>Total Quantity <span>{totalQuantity}</span></h6>
                <h6>Sub total <span>${totalcost}</span></h6>
                <h6>Shipping <span>$0</span></h6>
                <h6>Total <span>${totalcost}</span></h6>
                <button className='w-100 text-center p-2'>Place order</button>
              </div>
            </Col >
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout