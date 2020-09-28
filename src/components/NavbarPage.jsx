import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import especie from "../img/bckgrounduno.png";
import logo from "../img/logounimarc.png";
import moteImg from "../img/moteconhuesillo.png";
import { MDBBtn, MDBBtnGroup } from "mdbreact";
import "../StyleCSS/NavbarPage.css";
class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="white" dark expand="md" fixed="top">
              <MDBNavbarBrand href="/">
                <img className="ml-3 imgUnimarc" src={logo} alt="imgres" />
              </MDBNavbarBrand>
              {!this.state.isWideEnough && (
                <MDBNavbarToggler onClick={this.onClick} />
              )}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav
                  className="ml-4"
                  style={{ fontFamily: "Clarendon Cn BT", fontSize: "18px" }}
                  left
                >
                  <MDBNavItem active>
                    <MDBNavLink
                      className="ml-1"
                      style={{ color: "black" }}
                      to="#"
                    >
                      INICIO
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      className="ml-1"
                      style={{ color: "black" }}
                      to="#"
                    >
                      CATALOGO
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      className="ml-1"
                      style={{ color: "black" }}
                      to="#"
                    >
                      CLUB AHORRO
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      className="ml-1"
                      style={{ color: "black" }}
                      to="#"
                    >
                      OFERTAS
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      className="ml-1"
                      style={{ color: "black" }}
                      to="#"
                    >
                      RECETAS
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      className="ml-1"
                      style={{ color: "black" }}
                      to="#"
                    >
                      LOCALES Y HORARIOS
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          <MDBView src={especie}>
            {/*<MDBMask
              overlay="black-light"
              className="container flex-center text-white text-center"
            >*/}
             <div className="container text-white text-center mt-5 flex-center-d-none d-sm-block mote">
              <div className="row">
                <div className="col-sm-12 col-md-6 huesillo">
                  <h5 className="tituloUno">Receta del mes</h5>
                  <h5 className="textoMote">
                    ¿Mote con Huesillo 😮? Si que sí. Comencemos la celebración
                    con un rico motesito helado 😍.
                  </h5>
                  <h5 className="textoFonda">
                    Que a tu fonda no le falte nada, con el rico sabor de esta
                    tradicional bebida Chile.
                  </h5>
                  <div className="grupoBotones">
                  <button className="recetaMes">Receta del Mes</button>
                  <button className="masRecetas">Más Recetas</button>
                  </div>
                  {/*<MDBBtnGroup className="mt-4 grupoBotones " size="md"> 
                    <MDBBtn rounded color="danger" style={{borderRadius:"20px", border:"2px solid white"}}>
                      <strong>Receta del Mes</strong>
                    </MDBBtn>
                    <MDBBtn className="ml-2" rounded outline color="white" style={{borderRadius:"20px"}}>
                     <strong>Más Recetas</strong> 
                    </MDBBtn>
          </MDBBtnGroup>*/}
                </div>
                <div className="col-sm-12 col-md-2 ml-4 mr-5 d-none d-sm-block ">
                  <img 
                    src={moteImg}
                    className="motehuesillo"
                    alt="mote-huesillo"
                  />
                </div>
              </div>
             </div>
              {/*  <MDBBtn rounded color="danger">Receta del Mes</MDBBtn>
              <MDBBtn rounded outline color="danger">Más Recetas</MDBBtn> */}
            {/*</MDBMask>*/}
          </MDBView>
        </header>
        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </MDBContainer>
        </main>
      </div>
    );
  }
}
export default FullPageIntroWithFixedNavbar;
