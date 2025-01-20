# Finance Tracker App - Frontend

This repository contains the frontend code for the Finance Tracker App, a web application designed to help users manage their finances by tracking income, expenses, and overall balance. The frontend is built using React.js and styled with React-Bootstrap, providing an intuitive and responsive user interface.

## Features

- **User Authentication**: Interfaces for user registration and login.
- **Dashboard**: Overview of current balance and quick add transaction functionality.
- **Transaction Management**: View, add, edit, and delete transactions from the Transactions page.
- **Financial Reports**: Visualize spending habits using pie charts and income/expense trends with line graphs.

## Technology Stack

- **Frontend Framework**: React.js
- **State Management**: Context API
- **UI Library**: React-Bootstrap
- **Charts**: Chart.js or Recharts
- **Deployment**: Netlify or Vercel

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (>=14.x)
- npm (>=6.x)

### Steps to Run Locally

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd finance-tracker-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```env
   REACT_APP_API_BASE_URL=<backend-api-url>
   ```

4. Start the development server:
   ```bash
   npm start
   ```
   The app will run on `http://localhost:3000` by default.

## Available Pages

- **Registration Page**: Allows users to create a new account.
- **Login Page**: Authenticates users and grants access to the dashboard.
- **Dashboard**: Displays the current balance and allows users to quickly add transactions.
- **Transactions Page**: Shows a detailed list of all transactions with options to add, edit, or delete.

## Folder Structure

```
src/
|-- components/      # Reusable components (e.g., Navbar, Footer, Forms)
|-- pages/           # Page components (Dashboard, Transactions, etc.)
|-- context/         # Context API for global state management
|-- utils/           # Utility functions (e.g., API calls, formatters)
|-- assets/          # Static assets (images, icons, etc.)
|-- App.js           # Root component
|-- index.js         # Entry point
```

## Deployment

1. Build the app for production:

   ```bash
   npm run build
   ```

2. Deploy the `build` folder to a hosting platform like Netlify or Vercel.

3. Ensure the `REACT_APP_API_BASE_URL` is correctly configured in the hosting environment.

## Environment Variables

- `REACT_APP_API_BASE_URL`: The base URL of the backend API (e.g., `https://api.example.com`).

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [React.js](https://reactjs.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Chart.js](https://www.chartjs.org/)
- [Recharts](https://recharts.org/)
