import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Badge } from 'reactstrap'
import './header.css'

const Header = () => {
    return (
        <header className='header'>
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
                            <span className='fav-icon'><i className="ri-heart-fill"></i><Badge
                                color="dark"
                                pill
                            >
                                1
                            </Badge></span>
                            <span className='cart__icon'><i className="ri-shopping-cart-fill"></i>
                                <Badge
                                    color="dark"
                                    pill
                                >
                                    1
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