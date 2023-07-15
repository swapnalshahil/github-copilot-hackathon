# Github Copilot Hackathon

use npm run watch to run both server and client together

## Summary

- Built a finance tracker web application
- Key functionalities:
  - Sign-in using Google authentication for secure access.
  - Efficient expense management: add, update, and delete expenses and their details.
  - Analytics feature to analyze and track expenses.
  - Previous month expense details for reference.
  - Graphical representation to compare expenses and income visually.



## Proposed Solution

- The finance tracker app utilizes various technologies and features to provide a comprehensive financial management solution. The project utilizes the MERN stack, with a backend implemented in Express and a frontend developed using React.js. MongoDB is used as the database.
- The app incorporates Google Authentication for user login and authentication. JWT refresh tokens are implemented to ensure secure and persistent user sessions.
- The landing page of the app consists of three cards. The first card displays the current balance, while the second card shows the amount spent (expenses). The third card presents a pie chart depicting the relationship between the remaining amount (current balance) and the amount spent (expenses).
- Both the first and second cards have dropdown menus that allow users to perform actions. In the current balance card, users can add or remove amounts as income. In the expense card, users can add transactions through a dropdown menu. Modals are used to create these interactive elements.
- The landing page also includes a section that displays the user's last transactions. The transaction page provides a comprehensive list of all transactions and allows sorting based on date (newest to oldest or vice versa) and ascending or descending amounts. Users can also apply filters based on the added and spent amounts.
- The analytics page offers insights into the expenses over the last 12 months, relative to the added income. This feature helps users analyze their financial trends and patterns. (need integration)
- The profile section showcases user information, such as name, occupation, current balance, last month's expense, and total transactions. Additionally, there are suggestions for potential enhancements, including the ability to add tags to transactions, generate PDF or Excel reports, and implement further analytics logic for comprehensive financial analysis.

## Business Challenge/Use Cases

- Business Challenge:
  - People struggle with managing personal finances and tracking expenses.
  - Lack of budgeting and insights into spending habits.
- Use Cases:
  - Easily record and categorize expenses, track spending patterns.
  - Generate detailed expense reports, visualize spending patterns.
  - Track income sources alongside expenses, maintain financial balance.

## Demonstration Video [Link](https://drive.google.com/file/d/1bTufOxKe0vA_tAVbd83GW0rkCeMBEE69/view?usp=sharing)
