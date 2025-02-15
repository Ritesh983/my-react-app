import { useEffect,useState } from "react";

function useCurrencyInfo(currency) {
  const[data,setData] = useState({});
useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/b0bdd662096e39b132c0a0b0/latest/${currency}`)
    .then((response) => response.json())
    .then((data) => setData(data.conversion_rates))
   // const rate= data[currency.toUpperCase()];
}, [currency])
return data;
}

export default useCurrencyInfo;