import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import especie from '../img/bckgrounduno.png'
import logo from '../img/logounimarc.png'
import mote from '../img/moteconhuesillo.png'
import { MDBBtn, MDBBtnGroup } from "mdbreact";
import '../StyleCSS/NavbarPage.css'
class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="white" dark expand="md" fixed="top">
              <MDBNavbarBrand href="/">
              <img className="ml-3"src={logo} alt="imgres"/>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav className="ml-4"style={{fontFamily:"Clarendon Cn BT",fontSize:"18px"}}left>
                  <MDBNavItem active>
                    <MDBNavLink className="ml-1"style={{color: "black"}} to="#">INICIO</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="ml-1"style={{color: "black"}} to="#">CATALOGO</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="ml-1"style={{color: "black"}} to="#">CLUB AHORRO</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="ml-1"style={{color: "black"}} to="#">OFERTAS</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="ml-1"style={{color: "black"}} to="#">RECETAS</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="ml-1"style={{color: "black"}} to="#">LOCALES Y HORARIOS
              </MDBNavLink>
                  </MDBNavItem>
                
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          <MDBView src={especie}>
            <MDBMask overlay="black-light" className="flex-center text-white text-center">
              <div className="container">
              <div className="col-md-8">
              <h1 className="tituloUno">Receta del mes</h1>
              </div>
              <div>
              <h5>¿Mote con Huesillo? Si que si. Comencemos la celebracion con un rico motesito helado.</h5>
              <p>Que ha tu fonda no le falte nada, con el rico sabor de esta tradicional bebida chile.</p>
              </div>
              </div>
             {/*  <MDBBtn rounded color="danger">Receta del Mes</MDBBtn>
              <MDBBtn rounded outline color="danger">Más Recetas</MDBBtn> */}
             <MDBBtnGroup>
             <MDBBtn rounded color="danger" size="lg">Receta del Mes</MDBBtn>
             <MDBBtn rounded outline color="danger" size="lg">Más Recetas</MDBBtn>
             </MDBBtnGroup>
             <img src={mote} className="motehuesillo" alt="mote-huesillo"/>
            </MDBMask>
          </MDBView>
        </header>
        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
      </div>
    );
  }
}
export default FullPageIntroWithFixedNavbar;