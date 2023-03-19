import React,{useState} from 'react'
import './buying.css'
import {Form, FormGroup,ListGroup,ListGroupItem,Button} from "reactstrap"
import { useNavigate } from 'react-router-dom'


const Buying = ({livingroom,avgRating}) => {
    const{price,reviews}=livingroom
    const navigate=useNavigate()
    const [credentials,setCredentials]=useState({
        userId:'01',
        userEmail:'ranaweerasc3714@gmail.com',
        firstName:'',
        lastName:'',
        phone:'',
        no:1,
    });
    const handleChange=e=>{
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    };

    const delivery = 100
    const total = Number(price) * Number(credentials.no) + Number(delivery)

    const handleClick = e=>{
        e.preventDefault()
        // console.log(credentials)
        navigate("/thank-you")
    }

    return <div className="buying">
        <div className="buying__top" d-flex align-items-center justify-content-between>
            <h3>${price}<span>/one item</span></h3>
            <span className="livingroom__rating d-flex align-items-center">
                <i class="ri-star-s-fill"></i>
                {avgRating===0?null:avgRating}({reviews?.length})
            </span>
        </div>

        <div className="buying__form">
            <h5>Information</h5>
            <Form className="buying__info-form" onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder="First name" id="firstName" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <input type="text" placeholder="Last name" id="lastName" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <input type="text" placeholder="Phone" id="phone" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder="No of Items" id="no" required onChange={handleChange}/>
                </FormGroup>
            </Form>
        </div>



        <div className="buying__bottom">
            <ListGroup>
                <ListGroupItem className="border-0 px-0">
                    <h5 className="d-flex align-items-center gap-1">${price}<i class="ri-close-line"></i> 1 item</h5>
                    <span>${price}</span>
                </ListGroupItem>

                <ListGroupItem className="border-0 px-0">
                    <h5>Delivery Charge</h5>
                    <span>${delivery}</span>
                </ListGroupItem>

                <ListGroupItem className="border-0 px-0 total" >
                    <h5>Total</h5>
                    <span>${total}</span>
                </ListGroupItem>
            </ListGroup>

            <Button className='btn primary__btn w-100 mt-4'onClick={handleClick}>
                Buy Now
            </Button>
        </div>
    </div>
}

export default Buying