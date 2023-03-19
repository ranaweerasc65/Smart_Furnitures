import React from 'react'
import NewarrivalCard from '../../shared/NewarrivalCard'
import newarrivalData from '../../assets/data/newarrivals'
import {Col} from "reactstrap"

const FeaturedNewarrivalList = () => {
  return (
    <>
        {newarrivalData?.map(newarrival=>(
            <Col lg="3" className="mb-4" key={newarrival.id}>
                <NewarrivalCard newarrival={newarrival}/>
            </Col>
        ))}
    </>
  )
}

export default FeaturedNewarrivalList