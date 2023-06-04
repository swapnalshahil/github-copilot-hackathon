// import { useState } from 'react';
// import Calendar from 'react-calendar';
// // import './App.css';

// function Calendarr() {
//   const [date, setDate] = useState(new Date());

//   return (
//     <div className='app'>
//       <h1 className='text-center'>React Calendar</h1>
//       <div className='calendar-container'>
//         <Calendar onChange={setDate} value={date} />
//       </div>
//       <p className='text-center'>
//         <span className='bold'>Selected Date:</span>{' '}
//         {date.toDateString()}
//       </p>
//     </div>
//   );
// }

// export default Calendarr;

import React from 'react'
import { Form } from 'react-bootstrap';
 
export default function Calendarr(){
    return(
        <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>
                </div>
            </div>
    )
}
// class Calendarr extends React.Component{
 
//     render(){
 
//         return(
//             <div>
//                 <div className="row">
//                     <div className="col-md-4">
//                         <Form.Group controlId="dob">
//                             <Form.Label>Select Date</Form.Label>
//                             <Form.Control type="date" name="dob" placeholder="Date of Birth" />
//                         </Form.Group>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
     
// }
 
// export default Calendarr;