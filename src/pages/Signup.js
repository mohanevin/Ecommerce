import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Helmet from '../components/helmet/Helmet'
import { Container, Row,Col, Form, FormGroup, Input} from 'reactstrap'
import '../styles/login.css'
import {auth} from '../firebase.config'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'
import { storage } from '../firebase.config'
import {setDoc,doc} from "firebase/firestore"
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [username,setUsername]=useState("")
  const [file,setFile]=useState(null)
  const navigate=useNavigate()

  const signup=(e)=>{
    e.preventDefault();
    
    try {
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    const storageRef =ref(storage,username)
    const upload=uploadBytesResumable(storageRef,file)
    upload.on((error)=>{
      toast.error(error.message)
    },()=>{
      getDownloadURL(upload.snapshot.ref).then(async(downloadURL)=>{
        console.log(downloadURL);
        await updateProfile(user,{
          displayName:username,
          photoURL:downloadURL
        })

        await setDoc(doc(db,'users',user.uid),{
          uid:user.uid,
          displayName:username,
          email,
          photoURL:downloadURL,
        })
        
      })
    })
    toast.success("Account created successfully")
    navigate("/login")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error('something went wrong')
  });
 
    } catch (error) {
      console.log(error.message);
    }
    
 
  }
 


  return (
    <Helmet name="signup">
    <Container>
      <Row>
        <Col lg='6' md="6" className='m-auto text-center'>
          <h3 className='fw-bold fs-4'>Sign up</h3>
          <Form className='login-form' onSubmit={signup}>
            <FormGroup>
              <Input type='type' placeholder='Enter your Username'  onChange={(e)=>setUsername(e.target.value)} value={username}/>
            </FormGroup>
            <FormGroup>
              <Input type='email' placeholder='Enter your email ID'  onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </FormGroup>
            <FormGroup>
              <Input type='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </FormGroup>
            <FormGroup>
              <input type='file'  onChange={(e)=>setFile(e.target.files[0])}/>
            </FormGroup>
            <button type='submit' className='login-btn'>Sign up</button>
            <p>Already have a account ? <Link to="/login">Login</Link></p>
          </Form>
        </Col>
      </Row>
    </Container>
    </Helmet>
  )
}

export default Login