// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';


function Header() {
  return (
    <div>
        
        <MDBNavbar light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
            <h1 >QouteGenerator</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
        
    </div>
  )
}

export default Header