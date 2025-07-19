# Finance Digest App

This is my implementation of a financial digest app.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18 or newer)
-   [pnpm](https://pnpm.io/)

### 1. Clone the repository

```bash
git clone https://github.com/devadeboye/finance-digest.git

cd finance-digest
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Setup environment variables

Create a `.env` file in the root of the project and add the following variables.

```env
# Application
NEXT_PUBLIC_FINNHUB_API_URL=https://finnhub.io/api/v1
NEXT_PUBLIC_FINNHUB_API_KEY=YOUR_FINNHUB_API_KEY
```

## Running the Application

To run the application in development mode with hot-reloading:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Available Routes

-   [home](http://localhost:3000).
-   [news](http://localhost:3000/news).

finnhub docs
https://finnhub.io/docs/api/market-news