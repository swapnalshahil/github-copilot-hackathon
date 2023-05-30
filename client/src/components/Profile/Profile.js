import React, {Components} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import {FaFacebook, FaTwitter, FaInstagram, FaRupeeSign} from "react-icons/fa"
export default function ProfileStatistics() {
  return (
    <div className="vh-100" style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">FName LName</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  @Occupation <span className="mx-2">|</span> <a href="#!">emailid.com</a>
                </MDBCardText>
                <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                  {/* <mdb-icon fab icon="android"></mdb-icon> */}
                    {/* <MDBIcon fab icon="facebook" size="lg" /> */}
                    {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                    <FaFacebook/>
                  </MDBBtn>
                  <MDBBtn outline floating className="mx-1">
                    {/* <MDBIcon fab icon="twitter" size="lg" /> */}
                    <FaTwitter></FaTwitter>
                  </MDBBtn>
                  <MDBBtn outline floating>
                    {/* <MDBIcon fab icon="skype" size="lg" /> */}
                    <FaInstagram/>
                  </MDBBtn>
                </div>
                <MDBBtn rounded size="lg">
                  Analyse Transactions 
                </MDBBtn>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5"><FaRupeeSign/>8471</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Current Balance</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">8512</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Last Month's Transaction</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">4751</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Total Transactions</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}