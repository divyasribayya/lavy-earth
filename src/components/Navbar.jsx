"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 1001;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }
`;

const NavLink = styled(Link)`
  color: #000;
  font-weight: 500;
  font-size: 1.1rem;
  font-family: sans-serif;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #94a7ae;
  }

  &:hover::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #4a90e2;
    transform: scaleX(1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #4a90e2;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    
    &:hover::after {
      display: none;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  color: #000;
  transition: color 0.3s ease;

  &:hover {
    color: #4a90e2;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/spices", label: "Spices" },
    { href: "/construction", label: "Construction" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <StyledHeader style={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none'
      }}>
        <NavContainer>
          <LogoContainer>
            <Image src="/img/logo.png" alt="Logo" width={100} height={100} />
          </LogoContainer>
          
          <Nav isOpen={isMenuOpen}>
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </Nav>

          <MobileMenuButton onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </MobileMenuButton>
        </NavContainer>
      </StyledHeader>
      
      <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
      
      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div style={{ height: "70px" }} />
    </>
  );
}
