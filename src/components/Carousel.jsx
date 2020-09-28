import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "../StyleCSS/carousel.css";
import carro from '../img/cocinaconniño.png'
import chile from '../img/recetachilena.png'
import vege from '../img/recetavegetariana.png'
import dulce from '../img/recetadulce.png'
import gluten from '../img/cocinasingluten.png'

const Carousele = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];

    return (
        <>
       
        <div className="container">
            <div>
        <div ><h5 className="textoCategorias mt-5">Categorías</h5>
        <p className="textoEncuentra">Encuentra la categoría que necesites y asi encontrar la mejor receta para que cocines!</p></div>
          <Carousel breakPoints={breakPoints}> 
            <Item style={{height:'300px'}}>  
                <a href="/kids"><img src={carro} alt="" className="img-fluid mx-auto"/> </a>                    
            </Item>
            <Item style={{height:'300px'}}>
                <a href="/Sweet"><img src={dulce} alt="" className=" img-fluid mx-auto"/> </a> 
            </Item>
            <Item style={{height:'300px'}}>
                <a href="/Chilenas"><img src={chile} alt="" className=" img-fluid mx-auto"/> </a>  
            </Item>
            <Item style={{height:'300px'}}>
                <a href="/Vegetariana"><img src={vege} alt="" className=" img-fluid mx-auto"/> </a>  
            </Item>
            <Item style={{height:'300px'}}>
                <a href="/Gluten"><img src={gluten} alt="" className=" img-fluid mx-auto"/> </a>  
            </Item>
           </Carousel>
           </div>
        </div>
      </>
    )
}


export default Carousele