// Navbar.js (or your component file)
import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;
  background-color: white; // Customize as needed
  color: blue; // Customize text color
`;

const Navbar = () => {
  return (
    <div> 

    <StyledNavbar>
        <img src="./src/components/home.svg" width="20%" alt="ReactImage" />     
        <a href="/">Home</a>
        <a href="/about">About</a>


    </StyledNavbar>
    </div>
  );
};

export default Navbar;
