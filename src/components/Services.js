import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../styles/services.css'
import serviceData from '../assets/data/serviceData'
import { motion } from "framer-motion"

const Services = () => {
  return (
    <section className='services'>
        <Container>
            <Row>
                {
                    serviceData.map((item,index)=>{
                        return (<Col lg='3' md='3' key={index}>
                        <motion.div whileHover={{ scale: 1.1 }} className='service_item' style={{background:item.bg}}>
                            <span><i class={item.icon}></i></span>
                            <div>
                                <h5>{item.title}</h5>
                                <p>{item.subtitle}</p>
                            </div>
                        </motion.div>
                        
                        </Col>)
                    })
                    
                }
            </Row>
        </Container>
    </section>
  )
}

export default Services