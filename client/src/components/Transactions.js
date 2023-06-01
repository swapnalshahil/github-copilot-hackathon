// import React, { useState } from "react";



// const TransactionList = () => {
//   const [expandedTransactionId, setExpandedTransactionId] = useState(null);
//   const transactions = [
//     {
//       id: 1,
//       date: "01-06-2023",
//       description: "dummy transactions",
//       amount: 1000,
//       additionalDetails: "please kaam kerlo",
//     },
//     {
//       id: 2,
//       date: "01-06-2023",
//       description: "dummy transactions",
//       amount: 1000,
//       additionalDetails: "please kaam kerlo",
//     },
//     {
//       id: 3,
//       date: "01-06-2023",
//       description: "dummy transactions",
//       amount: 1000,
//       additionalDetails: "please kaam kerlo",
//     },
//     {
//       id: 4,
//       date: "01-06-2023",
//       description: "dummy transactions",
//       amount: 1000,
//       additionalDetails: "please kaam kerlo",
//     },
//   ];

//   const handleTransactionClick = (transactionId) => {
//     if (expandedTransactionId === transactionId) {
//       setExpandedTransactionId(null);
//     } else {
//       setExpandedTransactionId(transactionId);
//     }
//   };

//   return (
//     <div>
//       <table className="table-auto w-full">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Date</th>
//             <th className="px-4 py-2">Description</th>
//             <th className="px-4 py-2">Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction) => (
//             <React.Fragment key={transaction.id}>
//               <tr
//                 className="cursor-pointer"
//                 onClick={() => handleTransactionClick(transaction.id)}
//               >
//                 <td className="border px-4 py-2">{transaction.date}</td>
//                 <td className="border px-4 py-2">{transaction.description}</td>
//                 <td className="border px-4 py-2">{transaction.amount}</td>
//               </tr>
//               {expandedTransactionId === transaction.id && (
//                 <tr>
//                   <td className="border px-4 py-2" colSpan="3">
//                     <div className="p-4 bg-gray-100">
//                       <p>Additional details:</p>
//                       <p>{transaction.additionalDetails}</p>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TransactionList;


import React, { useState } from 'react';

const TransactionList = () => {
  const [expandedTransactionId, setExpandedTransactionId] = useState(null);
      const transactions = [
        {
          id: 1,
          date: "01-06-2023",
          description: "dummy transactions",
          amount: 1000,
          additionalDetails: "please kaam kerlo",
        },
        {
          id: 2,
          date: "01-06-2023",
          description: "dummy transactions",
          amount: 1000,
          additionalDetails: "please kaam kerlo",
        },
        {
          id: 3,
          date: "01-06-2023",
          description: "dummy transactions",
          amount: 1000,
          additionalDetails: "please kaam kerlo",
        },
        {
          id: 4,
          date: "01-06-2023",
          description: "dummy transactions",
          amount: 1000,
          additionalDetails: "please kaam kerlo",
        },
      ];

  const handleTransactionClick = (transactionId) => {
    if (expandedTransactionId === transactionId) {
      setExpandedTransactionId(null);
    } else {
      setExpandedTransactionId(transactionId);
    }
  };

  return (
    <div className="bg-white w-70vw ml-20 mr-20 p-4 rounded-lg shadow-lg">
      <table className="table-auto bg-white w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <React.Fragment key={transaction.id}>
              <tr
                className="cursor-pointer bg-white hover:bg-gray-100"
                onClick={() => handleTransactionClick(transaction.id)}
              >
                <td className="border px-4 py-2">{transaction.date}</td>
                <td className="border px-4 py-2">{transaction.description}</td>
                <td className="border px-4 py-2">{transaction.amount}</td>
              </tr>
              {expandedTransactionId === transaction.id && (
                <tr>
                  <td className="border px-4 py-2" colSpan="3">
                    <div className="p-4 bg-white">
                      <p>Additional details:</p>
                      <p>{transaction.additionalDetails}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
