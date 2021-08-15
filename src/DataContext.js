import React, { useState } from "react";

let DataContext = React.createContext();

export default DataContext;

export let DataProvider = ({ children }) => {
  const [DataSet, setDataSet] = useState([
    {
      productName: "Handcrafted Metal Keyboard",
      price: 212.0,
      inStock: true,
      id: 1,
      count: 0,
      rating: 0,
    },
    {
      productName: "Generic Wooden Mouse",
      price: 346.0,
      inStock: false,
      id: 2,
      count: 0,
      rating: 0,
    },
    {
      productName: "Handcrafted Granite Chicken",
      price: 625.0,
      inStock: false,
      id: 3,
      count: 0,
      rating: 0,
    },
    {
      productName: "Fantastic Wooden Shirt",
      price: 938.0,
      inStock: false,
      id: 4,
      count: 0,
      rating: 0,
    },
    {
      productName: "Small Concrete Chair",
      price: 179.0,
      inStock: false,
      id: 5,
      count: 0,
      rating: 0,
    },
    {
      productName: "Small Cotton Chair",
      price: 158.0,
      inStock: false,
      id: 6,
      count: 0,
      rating: 0,
    },
  ]);
  return (
    <DataContext.Provider value={{ DataSet, setDataSet }}>
      {children}
    </DataContext.Provider>
  );
};
