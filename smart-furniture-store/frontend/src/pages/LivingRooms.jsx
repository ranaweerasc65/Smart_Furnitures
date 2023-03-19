import React, {useState, useEffect} from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/livingroom.css';
import SearchBar from './../shared/SearchBar'
import LivingroomCard from './../shared/LivingroomCard'
import livingroomData from '../assets/data/livingrooms'
import Newsletter from './../shared/Newsletter'
import { Container } from 'reactstrap';
import {Col,Row} from 'reactstrap'



const LivingRooms = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(()=>{
    const pages=Math.ceil(5/4)
    setPageCount(pages)
  },[page])

  return (
   <>
   <CommonSection title={"Living Room Furnitures"}/>
   <section>
    <Container>
      <Row>
        <SearchBar/>
      </Row>
    </Container>
   </section>
   
   <section className ="pt-0">
    <Container>  
      <Row>
       {     
        livingroomData?.map(livingroom=>(
        <Col lg='3' className="mb-4" key={livingroom.id}>
          <LivingroomCard livingroom ={livingroom}/>
        </Col>
        ))
       }   
     
<Col lg="12">
  <div className = "pagination d-flex align-items-center justify-content-center mt-4 gap-3">
    {[...Array(pageCount).keys()].map(number=>(
      <span key={number} onClick={()=>setPage(number)}
      className={page===number ? "active__page":""}>
        {number+1}
      </span>
    ))}

  </div>
</Col>      
</Row>
</Container>
</section>   
<Newsletter/>
</>
  )
}

export default LivingRooms