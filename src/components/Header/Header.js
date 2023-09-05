import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Badge } from 'reactstrap'
import './header.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const totalQuantity=useSelector((store)=>store.cart.totalQuantity)
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
                            <span className='cart__icon'><i className="ri-shopping-cart-fill"></i>
                                <Badge
                                    color="dark"
                                    pill
                                >
                                    {totalQuantity}
                                </Badge></span>
                            <span><img src='https://www.pngmart.com/files/21/Account-User-PNG.png' alt='profile' /></span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header