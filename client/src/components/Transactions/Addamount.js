import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
} from "mdb-react-ui-kit";
import Calendarr from "./Calendarr";

export default function Addamount() {
    return (
        <MDBContainer fluid className="py-5 gradient-custom">
            <MDBRow className="d-flex justify-content-center py-5">
                <MDBCol md="7" lg="5" xl="4">
                    <MDBCard style={{ borderRadius: "15px" }}>
                        <MDBCardBody className="p-4">
                            <MDBRow className="d-flex align-items-center">
                                <MDBCol size="9">
                                    <MDBInput
                                        label="Amount to add"
                                        id="form1"
                                        type="text"
                                        placeholder="INR"
                                    />
                                </MDBCol>
                                <MDBCol size="3">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/005/567/661/original/rupee-icon-indian-currency-symbol-illustration-coin-symbol-free-vector.jpg"
                                        alt="visa"
                                        width="64px"
                                    />
                                </MDBCol>

                                <MDBCol size="9">
                                    <MDBInput
                                        label="Description"
                                        id="form2"
                                        type="text"
                                        placeholder="Details"
                                    />
                                </MDBCol>

                                <MDBCol size="6">
                                    {/* <MDBInput
                                        label="Date"
                                        id="form2"
                                        type="text"
                                        placeholder="MM/DD/YYYY"
                                    /> */}
                                    {/* <Calendarr/> */}
                                </MDBCol>
                                {/* <MDBCol size="3">
                  <MDBInput
                    label="CVV"
                    id="form2"
                    type="text"
                    placeholder="&#9679;&#9679;&#9679;"
                  />
                </MDBCol> */}

                                <MDBCol size="3">
                                    <MDBBtn color="info" rounded size="lg">
                                        {/* <MDBIcon fas icon="arrow-right" /> */}
                                        Add
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            {/* <Calendarr/> */}
        </MDBContainer>

    );
}