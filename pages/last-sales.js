import { useEffect, useState } from "react";

const LastSalesPage = () => {
  const [sales, setSales] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://nextjs-prerendering-35b66-default-rtdb.firebaseio.com/sales.json",
    )
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);

  if (isloading) {
    return <h1>Loading...</h1>;
  }

  if (!sales) {
    return <h1>No sales</h1>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSalesPage;
