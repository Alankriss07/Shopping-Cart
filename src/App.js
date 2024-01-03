import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation";
import ProductDisplay from "./components/productdisplay.js";
import PageFooter from "./components/pagefooter.js";
import AddNewItem from "./components/addnewitem";

function App() {
  const initialinventory = [
    {
      cost: 99999,
      name: "iPhone 15 Pro Max",
      quantity: 0,
    },
  ];

  const [inventorylist, setinventorylist] = useState(initialinventory);
  const [carttotalprice, setcarttotalprice] = useState(0);

  const increaseitemquantity = (index) => {
    const updatedinventorylist = [...inventorylist];
    let updatedcarttotalprice = carttotalprice;
    updatedinventorylist[index].quantity++;
    updatedcarttotalprice += updatedinventorylist[index].cost;
    setcarttotalprice(updatedcarttotalprice);
    setinventorylist(updatedinventorylist);
  };

  const decreaseitemquantity = (index) => {
    const updatedinventorylist = [...inventorylist];
    let updatedcarttotalprice = carttotalprice;
    if (updatedinventorylist[index].quantity > 0) {
      updatedinventorylist[index].quantity--;
      updatedcarttotalprice -= updatedinventorylist[index].cost;
    }
    setcarttotalprice(updatedcarttotalprice);
    setinventorylist(updatedinventorylist);
  };

  const resetallquantities = () => {
    const updatedinventorylist = inventorylist.map((item) => ({
      ...item,
      quantity: 0,
    }));
    setinventorylist(updatedinventorylist);
    setcarttotalprice(0);
  };

  const removefromcart = (index) => {
    const updatedinventorylist = [...inventorylist];
    let updatedcarttotalprice = carttotalprice;
    updatedcarttotalprice -=
      updatedinventorylist[index].quantity * updatedinventorylist[index].cost;
    updatedinventorylist.splice(index, 1);
    setinventorylist(updatedinventorylist);
    setcarttotalprice(updatedcarttotalprice);
  };

  const addnewproducttoinventory = (name, price) => {
    const updatedinventorylist = [...inventorylist];
    updatedinventorylist.push({
      cost: price,
      name: name,
      quantity: 0,
    });
    setinventorylist(updatedinventorylist);
  };

  return (
    <>
      <Navigation />
      <main className="container mt-5">
        <AddNewItem addnewproduct={addnewproducttoinventory} />
        <ProductDisplay
          inventorylist={inventorylist}
          increaseitemquantity={increaseitemquantity}
          decreaseitemquantity={decreaseitemquantity}
          removefromcart={removefromcart}
        />
      </main>
      <PageFooter
        carttotalprice={carttotalprice}
        resetallquantities={resetallquantities}
      />
    </>
  );
}

export default App;
