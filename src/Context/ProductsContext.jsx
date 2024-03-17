import { createContext, useState, useEffect} from "react";

export const ProductsContext = createContext(null);

export const ProductProvider = ({ children }) => {
 
const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("https://dummyjson.com/products?skip=0&limit=10");
        const jsonData = await resp.json();
        jsonData.products.forEach(async (element) => {
          element.qty = 1;
          element.discount = await calculateDiscount(element);
          element.finalAmt = await calculateFinalAmt(element);
        });
        await setProducts([...jsonData.products]);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const calculateDiscount = async ({ price, discountPercentage }) => {
    const mrp = price;
    const disPercentage = discountPercentage;
    return (mrp * (disPercentage / 100)).toFixed(2);
  };

  const calculateFinalAmt = ({ price, discount }) => {
    return (price - discount).toFixed(2);
  };

  return (
    <ProductsContext.Provider value={{products, setProducts}}>
        {children}
    </ProductsContext.Provider>
  )
};
