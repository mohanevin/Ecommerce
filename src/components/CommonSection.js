import React from 'react'
import { Container } from 'reactstrap'
import "../styles/common.section.css"

const CommonSection = ({title}) => {
  return (
    <div>
        <section className='common-section'>
            <Container>
                <h1>{title}</h1>
            </Container>
        </section>
    </div>
  )
}

export default CommonSection