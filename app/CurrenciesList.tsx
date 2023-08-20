"use client";

import QuotationsHeader from "./QuotationsHeader";
import LastUpdate from "./LastUpdate";
import CurrencyItem from "./CurrencyItem";
import getSymbolFromCurrency from "currency-symbol-map";
import React, { useState, useEffect } from "react";

class Currency {
  code: string;
  symbol: string | undefined;
  name: string;
  ratio: number | null;

  constructor(code: string, name: string, ratio: number | null = null) {
    this.code = code;
    this.name = name;
    this.ratio = ratio;
    this.symbol = getSymbolFromCurrency(this.code);
  }
}

interface CurrencyApi {
  code: string;
  name: string;
}

function CurrenciesList() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://openexchangerates.org/api/currencies.json"
        );
        const data = await response.json();

        const currencyList = Object.entries(data).map(([code, name]) => {
          return new Currency(code, name as string); // You might want to provide the correct src
        });

        setCurrencies(currencyList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <LastUpdate />
      <QuotationsHeader />
      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-x-[10%] gap-y-5 lg:gap-y-12 w-10/12 2xl:w-[1440px] xl:w-[1024px]">
          {currencies.map((item, index) => {
            return (
              <div key={index}>
                <CurrencyItem
                  name={item.name}
                  symbol={item.symbol}
                  ratio={item.ratio}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pt-16"></div>
    </div>
  );
}

export default CurrenciesList;
