import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Portfolio from './pages/Portfolio';
import StockScanner from './pages/StockScanner';
import Positions from './pages/Positions';
import TradingLadders from './pages/TradingLadders';
import Charts from './pages/Charts';
import OrderBooks from './pages/OrderBooks';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Portfolio />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/stock-scanner" element={<StockScanner />} />
          <Route exact path="/positions" element={<Positions />} />
          <Route exact path="/trading-ladders" element={<TradingLadders />} />
          <Route exact path="/charts" element={<Charts />} />
          <Route exact path="/order-books" element={<OrderBooks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
