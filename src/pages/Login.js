import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Helmet from '../components/helmet/Helmet'
import { Container, Row,Col, Form, FormGroup, Input} from 'reactstrap'
import '../styles/login.css'
import {auth} from '../firebase.config'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { toast } from 'react-toastify'

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()

  const signin=async(e)=>{
    e.preventDefault();

    try{
      const userCredential=await signInWithEmailAndPassword(auth,email,password)
      const user =userCredential.user
      console.log(user);
      toast.success("Successfully logged in")
      navigate('/checkout')
    }
    catch(error)
    {
      toast.error(error)
    }
  }

  return (
    <Helmet name="login">
    <Container>
      <Row>
        <Col lg='6' md="6" className='m-auto text-center'>
          <h3 className='fw-bold fs-4'>Login</h3>
          <Form className='login-form' onSubmit={signin}>
            <FormGroup>
              <Input type='email' placeholder='Enter your email ID'  onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </FormGroup>
            <FormGroup>
              <Input type='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </FormGroup>
            <button type='submit' className='login-btn'>Login</button>
            <p>Dont have a account ? <Link to="/signup">create an account</Link></p>
          </Form>
        </Col>
      </Row>
    </Container>
    </Helmet>
  )
}

export default Login