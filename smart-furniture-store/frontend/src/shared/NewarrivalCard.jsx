import React from 'react'
import {Card, CardBody} from "reactstrap"
import {Link} from "react-router-dom"
import './newarrival-card.css';
import calculateAvgRating from '../utils/avgRating';



const NewarrivalCard = ({newarrival}) => {

    const {id, title, photo, price, reviews } = newarrival;


    const {totalRating, avgRating} = calculateAvgRating(reviews)

  return ( 
    <div className="newarrival__card">
        <Card>
            <div className="newarrival__img">
                <img src={photo} alt="newarrival-img"/>
                <span>New</span>
            </div>
            <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className="livingroom__rating d-flex align-items-center gap-1">
                <i class="ri-star-fill"></i> {avgRating === 0 ?  null : avgRating}
                {totalRating === 0 ? 'Not rated' : (<span>
                        ({reviews.length})
                    </span>)}
                </span>
            </div>

            <h5 className = "newarrival__title"><Link to={`/livingrooms/${id}`}> {title}</Link></h5>
            <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                <h6>${price}<span>/one item</span></h6>

                <button className="btn buynow__btn">
                    <Link to={`/livingrooms/${id}`}> Buy now</Link>
                </button>
             </div>
        </CardBody>
        </Card>
   </div>
   )
}

export default NewarrivalCard