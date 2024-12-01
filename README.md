## **Stock Market Eye**

**Stock Tracker Web App**  is a web-based application that allows users to monitor stock prices in real-time using the  **Yahoo Finance API**.

----------

**🚀 Features**
- Fetch real-time stock prices from Yahoo Finance API
- Interactive stock price charts
- Price alerts (get notified when a stock hits a target price)
- Watchlist for favorite stocks
- Fundamental data (P/E ratio, Market Cap, EPS, etc.)

----------

**📦 Installation**

**1. Clone the Repository**
```
git clone https://github.com/itsferdiardiansa/Stock-Market-Eye.git
cd stock-market-eye
```

**2. Install Dependencies**
Make sure you have  **Node.js**  and  **npm**  installed. Then, run:

```
pnpm install
```

**3. Set Up API Keys**
Create a  .env  file in the root directory and add your  **Yahoo Finance API Key**:

```
YAHOO_FINANCE_API_KEY=your_api_key_here
```

**4. Run the Application**
```
pnpm start
```

The application will be available at  **http://localhost:3000**.

----------

**📡 API Endpoints**

**1. Get Stock Price**

**Endpoint:**
```
GET /api/stock/:symbol
```

**Example Request:**
```
GET /api/stock/AAPL
```

**Response:**
```
{
  "symbol": "AAPL",
  "price": 185.23,
  "change": "+1.56",
  "percentChange": "+0.85%"
}
```

**2. Get Stock Historical Data**

**Endpoint:**
```
GET /api/stock/:symbol/history
```

**Example Request:**
```
GET /api/stock/AAPL/history?range=1mo
```

**Response:**
```
{
  "symbol": "AAPL",
  "history": [
    { "date": "2024-02-01", "close": 180.45 },
    { "date": "2024-02-02", "close": 182.12 }
  ]
}
```

----------

**🛠️ Technologies Used**

- **Frontend:**  React, NextJS, Chart.js
- **Backend:**  NestJS, 
- **Database:**  MongoDB (for watchlists and alerts)
- **API:**  Yahoo Finance API

----------

**📜 License**
This project is licensed under the  **MIT License**. See the  [LICENSE](LICENSE)  file for details.

----------

**👥 Contributors**
Feel free to contribute! Open an issue or submit a pull request.
**Contact:**  [ferdiardiansa@gmail.com](mailto:ferdiardiansa@gmail.com)