import React,{useRef} from 'react'
import './SearchBar.css'
import{Col,Form,FormGroup} from "reactstrap";



const SearchBar = () => {

    const showroomsRef = useRef('')
    const categoryRef = useRef('')
    const typeRef = useRef('')

    const searchHandler = ()=>{

        const showrooms = showroomsRef.current.value
        const category = categoryRef.current.value
        const type = typeRef.current.value

    }


  return <Col lg='12'>
    <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
            
            <FormGroup className="d-flex gap-2 form__group form__group-fast">
                <span>
                    <i class="ri-map-pin-line"></i>
                </span>
                <div>
                    <h6>Showrooms</h6>
                    <input type="text" placeholder="Colombo/Jaffna/Kegalle" ref={showroomsRef}/>
                </div>
            </FormGroup>

            <FormGroup className="d-flex gap-2 form__group form__group-fast " >
                <span>
                <i class="ri-typhoon-fill"></i>
                </span>
                <div>
                    <h6>Category</h6>
                    <input type="text" placeholder="Living/Dining/Office" ref={categoryRef}/>
                </div>
            </FormGroup>

            <FormGroup className="d-flex gap-2 form__group form__group-last">
                <span>
                <i class="ri-bubble-chart-line"></i>
                </span>
                <div>
                    <h6>Type</h6>
                    <input type="text" placeholder="Sofa/Bed/Chair/Table" ref={typeRef}/>
                </div>
            </FormGroup>


            <span className="search__icon" type="submit" onClick={searchHandler}>
                <i class="ri-search-line"></i>
            </span>


        </Form>
    </div>
  </Col>
};

export default SearchBar