import React ,{useState}from 'react'
import '../styles/login.css'
import{Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import registerImg from '../assets/images/register.png'
import {FcGoogle} from 'react-icons/fc'

const Register = () => {

  const [credentials, setCredentials] = useState({
    userName:undefined,
    email:undefined,
    password:undefined
  });

  const handleChange = e =>{
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value}))
  }


  const handleClick = e => {
    e.preventDefault();
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className='login__img'>
                <img src={registerImg} alt=""/>
              </div>
           

              <div className="login__form">
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input 
                    type="text" 
                    placeholder="Username" 
                    required 
                    id="userName" 
                    onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    id="email" 
                    onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                    id="password" 
                    onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type="submit">
                    Create Account
                  </Button>
                  <Button className='btn google__btn auth__btn ' type="submit">
                  <FcGoogle/>
                    Sign up with Google
                    </Button>
                </Form>
                <p>Already have an account?<Link to='/login'>Login </Link></p>
              </div>
 
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Register