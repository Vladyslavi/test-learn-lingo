import React from 'react'
import { Logo, LogoImg, Container } from './Header.styled'
import logo from '../../img/ukraine.png'
import Nav from '../Nav/Nav'
import AuthNav from '../AuthNav/AuthNav'

const Header = () => {
    return (
        <Container>
            <Logo to="/">
                <LogoImg src={logo} alt="ukraine logo" width={28} height={28} />
                <p>LearnLingo</p>
            </Logo>
            <>
                <div style={{ display: 'flex', gap: '40px' }}>
                    <Nav />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <AuthNav />
                </div>
            </>
        </Container>
    )
}

export default Header