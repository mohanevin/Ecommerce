import React from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'
import { Container, Row, Badge } from 'reactstrap'
import './header.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAuth } from '../../custom-hooks/useAuth'
import userIcon from '../../assets/images/user-icon.png'
import {signOut} from 'firebase/auth'
import {auth} from '../../firebase.config'
import { toast } from 'react-toastify'

const Header = () => {
    const totalQuantity=useSelector((store)=>store.cart.totalQuantity)
    const navigate=useNavigate()
    const {currentUser}=useAuth()
    
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 5 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    const logout=()=>{
        signOut(auth).then(()=>{
            toast.success("logged out successfully")
        }).catch((error)=>{
            toast.error(error.message)
        })
    }
    return (
        <header className='header header-section' >
            <Container>
                <Row>
                    <div className='nav__wrapper'>
                        <div className='logo'>
                            <img src='https://www.logolynx.com/images/logolynx/b2/b23666d57f4e17102209423105dfc442.png' alt='logo' />
                            <div>
                                <h1>Shopify</h1>
                            </div>
                        </div>


                        <div className='navigation'>
                            <ul className='menu'>
                                <li>
                                    <NavLink to='/' className={({ isActive }) =>
                                        isActive ? "nav__active" : ""
                                    }>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/shop' className={({ isActive }) =>
                                        isActive ? "nav__active" : ""
                                    }>Shop</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/cart' className={({ isActive }) =>
                                        isActive ? "nav__active" : ""
                                    }>Cart</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='nav-icons'>
                            <span className='cart__icon' onClick={()=>navigate('/cart')}><i className="ri-shopping-cart-fill"></i>
                                <Badge
                                    color="dark"
                                    pill
                                >
                                    {totalQuantity}
                                </Badge></span>
                            <span><img src={currentUser?currentUser.photoURL:userIcon} alt='profile' /></span>
                            {currentUser? <span style={{cursor:'pointer'}} onClick={logout}><h5>Logout</h5></span>:<span style={{cursor:'pointer'}} ><h5><Link to='/login'>Login</Link></h5></span>}
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header