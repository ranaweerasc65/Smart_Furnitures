import React ,{useEffect, useState}from 'react'
import '../styles/login.css'
import{Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom'
import loginImg from '../assets/images/login.png'
import {FcGoogle} from 'react-icons/fc'
import {app} from '../config/firebase-config'
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

// const [auth, setAuth]= useState(false||window.localStorage.getItem("auth")==="true")
const Login = ({setAuth}) => 
{

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();


  const loginWithGoogle = async () => {
     await signInWithPopup(firebaseAuth, provider).then((userCred) =>{
      if(userCred){
        setAuth="true";
        window.localStorage.setItem("auth","true");
        firebaseAuth.onAuthStateChanged((userCred)=>{
          if(userCred){
            userCred.getIdToken().then((token)=>{
                console.log(token);
            })
            navigate("/home",{replace:true})
        }else{
            setAuth="false";
            navigate("/login");
          }
        })
      }
     })
  }
//useEffect(()=>{
  //if(window.localStorage.getItem("auth")){
    //navigate("/home",{replace:true})
 // }
//},[])
  const [credentials, setCredentials] = useState({
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
                <img src={loginImg} alt=""/>
              </div>
           

              <div className="login__form">
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder="Email" required id="email" onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Password" required id="password" onChange={handleChange}/>
                  </FormGroup>
                  
                  <Button className='btn secondary__btn auth__btn' type="submit">
                    Login
                  </Button>
                  <Button className='btn google__btn auth__btn ' type="submit" onClick={loginWithGoogle}>
                  <FcGoogle/>
                    Sign in with Google
                    </Button>
                    
                </Form>
                <p>Don't have an account?<Link to='/register'>Create </Link></p>
              </div>
 
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Login