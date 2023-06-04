import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { FaRupeeSign } from "react-icons/fa";
import { AuthContext } from "../../contexts/authContextProvider";
import Navbar from "../Navbar/NavBar";

export default function ProfileStatistics() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div
        className="vh-100 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#eee" }}
      >
        <MDBContainer className="py-2">
          <MDBRow className="justify-content-center">
            <MDBCol md="12" xl="10" lg="10">
              <MDBCard
                className="p-3"
                style={{ borderRadius: "15px", color: "#333" }}
              >
                <MDBCardBody className="text-center items-center">
                  <div className="mt-3 mb-4 d-flex justify-content-center align-items-center">
                    <MDBCardImage
                      src={user.picture}
                      className="rounded-circle"
                      fluid
                      style={{ width: "100px" }}
                    />
                  </div>

                  <MDBTypography tag="h4">{user.name}</MDBTypography>
                  <MDBCardText className="text-muted mb-3">
                    {user.company || "Company Name"}
                  </MDBCardText>
                  <MDBCardText className="mb-4">{user.bio}</MDBCardText>
                  <div className="mb-4 d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex align-items-center">
                      <FaRupeeSign className="mr-2" />
                      <MDBCardText className="mb-1 h5">
                        {user.currency} {user.balance || 0}
                      </MDBCardText>
                    </div>
                    <MDBCardText className="small text-muted mb-0 text-center">
                      Current Balance
                    </MDBCardText>
                  </div>

                  <Link to="/transaction">
                    <MDBBtn rounded size="lg" className="mb-4" tag="button">
                      Analyze Transactions
                    </MDBBtn>
                  </Link>
                  <div className="d-flex justify-content-between text-center mt-3">
                    <div>
                      <MDBCardText className="mb-1 h5">
                        {user.lastMonthTransaction || 0}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Last Month's Transaction
                      </MDBCardText>
                    </div>
                    <div>
                      <MDBCardText className="mb-1 h5">
                        {user.totalTransactions || 0}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Total Transactions
                      </MDBCardText>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}
