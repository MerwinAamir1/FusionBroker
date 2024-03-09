// pages/StockPage.js
"use client";
import React, { useEffect } from 'react';
import { getStockData } from '../utils/data';
import { login } from '../utils/auth';
import {useState} from "react";

const StockPage = () => {
    const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_ACCOUNT', 'YOUR_APPID', and 'YOUR_PASSWORD' with your actual values
        const account = '302959';
        const appid = 'afd7450c-3a14-4f6a-8050-94a49d105fc3';
        const pass = '0473GXRQ';

        // Perform login to get authentication token
        const token = await login(account, appid, pass);

        // Replace 'AAPL', '2022-01-01', '2022-03-01', 1, 1 with your desired values
        const ticker = 'AAPL';
        const start = '2022-01-01';
        const end = '2022-03-01';
        const olhv = 1;
        const unadj = 1;

        // Fetch stock data using the obtained token
        const stockData = await getStockData(ticker, start, end, olhv, unadj, appid, token);

        setData(stockData);
        console.log('Stock Data:', stockData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  },[]);

  
  return (
    <div>
        <p>{JSON.stringify(data)}</p>
    </div>
  );
};
export default StockPage;
