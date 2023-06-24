import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
import { AuthContext } from "../contexts/authContextProvider";
import Navbar from "./Navbar/NavBar";
import { useLocation } from "react-router-dom";

export default function ProfileStatistics() {
  const { user, jwtToken } = useContext(AuthContext);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [oneyearTransactiondata, setOneYearTransactionData] = useState(0);
  const location = useLocation();

useEffect(() => {
  if (jwtToken) {
    axios
      .get("http://localhost:4000/user", {
        headers: {
          Authorization: jwtToken,
        },
      })
      .then((res) => {
        setCurrentBalance(res.data.user.currentBalance);
        setTotalTransactions(res.data.transactions.transactions.length);
        console.log(res.data, "meow");

        return lastYearTransactions(res.data.transactions.transactions);
      })
      .then((res) => {
        setOneYearTransactionData(res);
      })
      .catch((e) => console.log(e));
  }
}, [jwtToken, location]);


const lastYearTransactions = async (transactions) => {
  const currentDate = new Date();
  const lastMonth = currentDate.getMonth() - 1; // Get the month index of the last month
  // console.log(transactions, lastMonth,"transactions")
  const lastMonthTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.transactionDate);
    return transactionDate.getMonth() === lastMonth;
  });

  const totalAmount = lastMonthTransactions.reduce((sum, transaction) => {
    return sum + transaction.amount;
  }, 0);
  return totalAmount;
};



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
                        {user.currency} {currentBalance || 0}
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
                        {user ? oneyearTransactiondata : 0}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Last Year's Transactions
                      </MDBCardText>
                    </div>
                    <div>
                      <MDBCardText className="mb-1 h5">
                        {totalTransactions || 0}
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
