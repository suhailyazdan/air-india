import React from 'react'
import { Container } from 'react-bootstrap'
import StarLogo from '../images/star-alliance-logo.png'
import { FaUserLock} from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';


const LoginBar = () => {
  return (
    <Container className='loginBar my-3'>
      <div className='d-flex flex-wrap justify-content-start align-items-center'>
        <img src={StarLogo} alt="New Star Alliance Logo" />

        <div className='d-flex align-items-center ms-auto'>
          <div className='mx-1 ' style={{fontSize: "0.7rem"}}>A</div>
          <div className='mx-1 p-2' style={{fontSize: "0.9rem"}}>A</div>
          <div className='mx-1 py-1 px-3 border border-1 border-dark'>A</div>
          <div className='mx-1 py-1 px-3 border border-1 border-dark bg-dark text-white'>A</div>
        </div>

        <a className='btn btn-primary mx-2' href='/'>
          <div className='d-flex align-items-center justify-content-center'>
            <FaUserLock className='me-2' />
            <div>Login</div>
          </div>
        </a>

        <a className='btn btn-primary mx-2' href='/'>
          <div className='d-flex align-items-center justify-content-center'>
            <GiNotebook className='me-2' />
            <div>Enroll</div>
          </div>
        </a>
      </div>
    </Container>
  )
}

export default LoginBar