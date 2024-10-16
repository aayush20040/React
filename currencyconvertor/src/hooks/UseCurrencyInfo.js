import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchCurrencyData() {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const json = await response.json();
        setData(json[currency]);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    }

    if (currency) {
      fetchCurrencyData();
    }
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
