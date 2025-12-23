//React
import { useState, useEffect } from 'react'

//CoreUi Library
import {
    CContainer,
    CNavbarNav,
    COffcanvasHeader,
    COffcanvasTitle,
    COffcanvasBody,
    CCloseButton,
} from '@coreui/react'

import '@coreui/coreui/dist/css/coreui.min.css'

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

//Next Themes Library (darkmode)
import { useTheme } from "next-themes";

//Tags from Styles
import { StyledNavbar, StyledOffcanvas, StyledNavbarToggler, StyledNavLink, Item } from './styles'

export function Header() {
    const [visible, setVisible] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const { theme, setTheme } = useTheme();

    //Header Config
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <StyledNavbar className={scrolled ? 'scrolled' : ''}>

            <CContainer fluid className="d-flex justify-content-end align-items-center">
                <CNavbarNav className="d-none d-lg-flex flex-row gap-5 justify-content-end">
                    <Item>
                        <StyledNavLink href="/">
                            Home
                        </StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink href="">
                            Sobre mim
                        </StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink href="">
                            Aprendizado
                        </StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink href="">
                            Atividades
                        </StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink href="">
                            Experiências
                        </StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink href="">
                            Contato
                        </StyledNavLink>
                    </Item>
                    <Item>
                        <button
                            className="darkMode"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                        </button>
                    </Item>
                </CNavbarNav>

                <StyledNavbarToggler
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                    className="d-lg-none ms-3"
                    onClick={() => setVisible(!visible)}
                />

                <StyledOffcanvas
                    id="offcanvasNavbar"
                    placement="end"
                    portal={true}
                    visible={visible}
                    onHide={() => setVisible(false)}
                >
                    <COffcanvasHeader>
                        <COffcanvasTitle style={{ color: 'white' }}>Menu</COffcanvasTitle>
                        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
                    </COffcanvasHeader>
                    <COffcanvasBody>
                        <CNavbarNav className="flex-column gap-3">
                            <Item>
                                <StyledNavLink href="/">
                                    Home
                                </StyledNavLink>
                            </Item>
                            <Item>
                                <StyledNavLink href="">
                                    Sobre mim
                                </StyledNavLink>
                            </Item>
                            <Item>
                                <StyledNavLink href="">
                                    Aprendizado
                                </StyledNavLink>
                            </Item>
                            <Item>
                                <StyledNavLink href="">
                                    Atividades
                                </StyledNavLink>
                            </Item>
                            <Item>
                                <StyledNavLink href="">
                                    Experiências
                                </StyledNavLink>
                            </Item>
                            <Item>
                                <StyledNavLink href="">
                                    Contato
                                </StyledNavLink>
                            </Item>
                            <Item>
                                <Item>
                                    <button
                                        className="darkMode"
                                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    >
                                        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                                    </button>
                                </Item>
                            </Item>
                        </CNavbarNav>
                    </COffcanvasBody>
                </StyledOffcanvas>
            </CContainer>
        </StyledNavbar>
    )
}