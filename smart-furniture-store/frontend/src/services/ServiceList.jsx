import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from "reactstrap"


const servicesData =[
{
    
    title: "Quality ",
    desc:"Experience the highest quality craftsmanship and materials with our exceptional furniture pieces, designed to elevate your home decor to the next level."
},
{
   
    title: "Customization ",
    desc:"Bring your vision to life with our extensive range of customization options, allowing you to create furniture pieces that perfectly suit your needs and aesthetic.",
},
{
    
    title: "Guarantee ",
    desc: "Shop with confidence knowing that all of our furniture pieces come with a satisfaction guarantee, ensuring your complete peace of mind with every purchase.",
}]

const ServiceList = () => {
  return   <>
  {
    servicesData.map((item,index)=> 
    <Col lg='3' key={index}>
        <ServiceCard item={item}/>
    </Col>)
  }
  
  </> 
  }

export default ServiceList