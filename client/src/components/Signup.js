import React from 'react';
import useAuth from '../hooks/useAuth';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Signup() {
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='12' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Track your<br />
            <span className="text-primary">Finance with us</span>
          </h1>

          {/* <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p> */}

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              {/* <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                </MDBCol>
              </MDBRow> */}

              {/* <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/> */}
              {/* <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/> */}

              {/* <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

              <MDBBtn className='w-100 mb-4' size='md'>sign in with Google</MDBBtn>

              <div className="text-center">

                {/* <p>or sign up with:</p> */}

                {/* <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn> */}

                {/* <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn> */}

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                {/* <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/> */}
                {/* </MDBBtn> */}
            {/* <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <a href="/login" className="link-danger">Login</a></p> */}

              </div>

            </MDBCardBody>
          </MDBCard>
              <br/>
              <br/>
              <br/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;