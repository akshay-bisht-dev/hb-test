import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BsCartFill } from "react-icons/bs"
import { Badge } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../App.css'

const NavBar = () => {
    const count = useSelector((state) => state.cart);
    return (
        <>
            <Navbar bg="light" variant="light" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className='text-decoration-none text-dark mx-3'>HB Synergy India</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className='text-decoration-none text-dark'>Home</NavLink>
                    </Nav>

                    <div className="cart">
                        <NavLink to='/cart'>
                        <Badge color="secondary" badgeContent={count.length}>
                            <BsCartFill style={{ fontSize: 25, cursor: "pointer" }} />
                        </Badge>
                        </NavLink>
                    </div>
                </Container>

            </Navbar>
        </>
    )
}

export default NavBar