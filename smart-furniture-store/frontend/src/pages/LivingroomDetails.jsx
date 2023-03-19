

import React,{useRef,useState} from 'react'
import '../styles/livingroom-details.css'
import {Container, Row, Col, Form, ListGroup} from 'reactstrap'
import {useParams} from 'react-router-dom'
import livingroomData from '../assets/data/livingrooms'
import avatar from "../assets/images/avatar.jpg"
import Buying from '../components/Buying/Buying'
import calculateAvgRating from './../utils/avgRating'


const LivingroomDetails = () => {

    const {id} = useParams()
    const livingroom = livingroomData.find(livingroom=>livingroom.id===id)
    const {photo,title,desc,price,reviews,color} = livingroom
    const reviewMsgRef=useRef('')
    const [livingroomRating, setLivingroomRating] = useState(null)
    const options={day:'numeric',month:"long",year:"numeric"}; 
    const {totalRating, avgRating} = calculateAvgRating(reviews);

    const submitHandler = e =>{
        e.preventDefault()
        const reviewText=reviewMsgRef.current.value
        //alert(`${reviewText},${livingroomRating}`);
    }

    


  return (
  <>
  <section>
    <Container>  
        <Row>
            <Col lg='8'>
                <div className = "livingroom__content">
                    <img src = {photo} alt="" />

                    <div className = "livingroom__info">
                        <h2>{title}</h2>

                        <div className='d-flex align-items-center gap-5'>

                            <div className="livingroom__extra-details">                 
                            <span className="livingroom__rating d-flex align-items-center gap-1">
                            <i class="ri-star-fill" style={{color:"var(--secondary-color)"}}></i> 
                            {avgRating === 0 ?  null : avgRating}
                                {totalRating === 0 ? 'Not rated' : (
                                <span> ({reviews?.length})</span>)}
                            </span>
                            
                            <span>
                                <i class="ri-money-dollar-circle-line"> </i>
                                   ${price}/one item
                                </span>
                                <span>
                                <i class="ri-leaf-fill"></i>
                                    Color: {color}
                                </span>
                            </div>
                        </div>

                        <h5>Description</h5>
                            <p>{desc}</p>

                        <div className="livingroom__reviews">
                            <h4>Reviews({reviews?.length} reviews)</h4>

                            <Form onSubmit={submitHandler}>
                                <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                    <span onClick={()=>setLivingroomRating(1)}>
                                        1 <i class="ri-star-fill"></i>
                                    </span>
                                    <span onClick={()=>setLivingroomRating(2)}>
                                        2 <i class="ri-star-fill"></i>
                                    </span>
                                    <span onClick={()=>setLivingroomRating(3)}>
                                        3 <i class="ri-star-fill"></i>
                                    </span>
                                    <span onClick={()=>setLivingroomRating(4)}>
                                        4 <i class="ri-star-fill"></i>
                                    </span>
                                    <span onClick={()=>setLivingroomRating(5)}>
                                        5 <i class="ri-star-fill"></i>
                                    </span>
                                </div>


                                <div className="review__input">
                                    <input type="text" ref={reviewMsgRef} placeholder="Share your thoughts" required/>
                                    <button className="btn primary__btn text-white" type="submit" >
                                            Submit
                                    </button>
                                </div>
                            </Form>


                            <ListGroup className='user__reviews'>
                                {
                                    reviews?.map(review=>(
                                        
                                        <div className='review__item'>
                                            <img src={avatar} alt=""/>
                                            <div className="w-100">
                                            <h5>Sachini Ranaweera</h5>
                                               <div className='d-flex align-items-center justify-content-between'>
                                                <div>
                                                <p>{new Date("03-10-2023").toLocaleDateString("en-US",options)}</p>
                                            </div>
                                            <span className="d-flex align-items-center">5<i class="ri-star-s-fill"></i></span>
                                            </div>
                                            <h6>Best quality product. Amazing! Highly recommended</h6>
                                        </div>
                                        </div> 
                                        
                                    ))
                                }

                            </ListGroup>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg="4">
                <Buying livingroom={livingroom} avgRating={avgRating}/>

            </Col>
        </Row>
    </Container>
  </section>
 
  </>
  )
}

export default LivingroomDetails;