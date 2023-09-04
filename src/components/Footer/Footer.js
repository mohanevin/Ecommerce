import React from 'react'
import { Col, Container, Row ,ListGroup,ListGroupItem} from 'reactstrap'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col md='4' lg='4' className='mt-3 brand-name'>
            <h4>Shopify</h4>
          </Col>
          <Col md='4' lg='4' className='mt-3'>
            <h4>Quick links</h4>
            <ul className='quick-links'>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
          </ul>
          </Col>
          <Col md='4' lg='4'className='mt-3'>
            <h4>Contact Us</h4>
            <p>
            Shopify Private Limited,

            Buildings Alyssa, Begonia &

            Clove Embassy Tech Village,

            Outer Ring Road, Devarabeesanahalli Village,

            Bengaluru, 560103,

            Karnataka, India

            CIN : U51109KA2012PTC066107

            Telephone: 044-45614700


            </p>
          </Col>
        </Row>
        <Row>
          <Col md="12" lg="12">
            <p className='text-center'> TM © 2023 - Shopify Private Limited - All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer