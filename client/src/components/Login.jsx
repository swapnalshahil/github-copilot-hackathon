
import React from 'react';
import useAuth from '../hooks/useAuth';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Signup from './Signup';
function Login() {
    const [user, login, logout] = useAuth();
    return (
        // <div>
        //     <h2>React Google Login</h2>
        //     <br />
        //     <br />
        //     {user ? (
        //         <div>
        //             <img src={user.picture} alt="user profile" />
        //             <h3>User Logged in</h3>
        //             <p>Name: {user.name}</p>
        //             <p>Email Address: {user.email}</p>
        //             <br />
        //             <br />
        //             <button onClick={logout}>Log out</button>
        //         </div>
        //     ) : (
        //         <button onClick={() => login()}>Sign in with Google 🚀 </button>
        //     )}
        // </div>
        <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" /> */}
          <img src="https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg" class="img-fluid" alt="Sample image" />
        </MDBCol>
        <br/>
        <br/>
        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='google' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/signup" className="link-danger">Register</a></p>
          </div>
        <br/>
        <br/>
        <br/>
        <br/>

        </MDBCol>

      </MDBRow>

      {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"> */}

        {/* <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div> */}

        {/* <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn> */}

          {/* <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>

        </div> */}

      {/* </div> */}

    </MDBContainer>
    );
}
export default Login;