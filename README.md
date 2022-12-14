# swd-evaluation-task-2

Full Stack Software Developer evaluation task

## Project Definition

Build a full-stack mobile apps

## Project Description

You will build a full stack mobile application using `Node.js` and `React Native` where user will be able to fill up required information and submit the form to the database.

## Technical Stack

- Backend:
  - `Node.js`
  - `Express.js`
- Database:
  - You have to work with `Oracle` Database in our office. but for this project you can use any SQL database (i.e: `MySQL`, `PostgreSQL`, etc) as your choice.
- Mobile App:
  - `React Native`
  - `Redux`

## REST API endpoints

- List of customers: `http://localhost:3000/customers`, method: `GET`
- Single Customer: `http://localhost:3000/customers/:id`, method: `GET`
- List of Banks: `http://localhost:3000/banks`, method: `GET`
- Single Bank: `http://localhost:3000/banks/:id`, method: `GET`
- Form Submission: `http://localhost:3000/submit-form`, method: `POST`, payload:
  `{ "customer_code": 12345, "customer_name": "ABC Customer", "bank_id": 12221, "bank_name": "Agrani Bank Ltd.", "amount": 313130 }`
- List of Money Receipts: `http://localhost:3000/money-receipts`, method: `GET`
- Single Money Receipt: `http://localhost:3000/money-receipts/:id`, method: `GET`

## Mobile App

- `Home Screen`: Welcome a user and show button to add money receipt.
- `List of Customers Screen`: User will see the list of customers and s/he can be able to select only one customer and move to the next screen.
- `List of Bank Screen`: User will see the list of available bank and s/he can be able to select only one bank and move to the next screen.
- `Form Screen`:

  - show user to the selected customer and bank details and there will be two input fields:

  1. user can enter the amount he is already deposit to the bank against selected customer and
  2. a note field where user can be able to add some notes against the deposit amount.

  - a `submit` button to submit this form information to the database.

- `List of Money Receipt Screen`:

  - show user the list of money receipt and user can be able to select a money receipt to see the details.

- `Money Receipt Details Screen`:
  - show user the details of the selected money receipt.

## Database Table Schema

- `customers`:

  - `customer_code`: `int`
  - `customer_name`: `varchar`
  - `customer_address`: `varchar`

- `banks`:

  - `bank_id`: `int`
  - `bank_name`: `varchar`

- `money_receipts`:

  - `mr_id`: `int`
  - `customer_code`: `int`
  - `customer_name`: `varchar`
  - `bank_id`: `int`
  - `bank_name`: `varchar`
  - `amount`: `int`
  - `note`: `varchar`

## Code Submission Guideline

- `fork` this repository
- `clone` the repository to your local machine
- create a new `branch`, `commit` your changes and `push` it to your repository
- create a new `pull request`
- submit your `pull request`

## Bonus Requirements

- Use `TypeScript` to this project and it will consider as your bonus mark if you are not familiar with `TypeScript` then you can skip this bonus requirement.
