import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let [foodItems, setFoodItems] = useState(['dal', 'roti', 'green vegetables', 'salad', 'milk', 'ghee']);
  let [foodItems, setFoodItems] = useState([]);
  
  // let foodItems = [];
  // let [textToShow, setTextToShow] = useState();

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      setFoodItems([...foodItems, newFoodItem]);
      event.target.value = '';
    }
    
  
};

  return <>
    <Container>
      <h1 className="food-heading">Healthy food</h1>
      <ErrorMessage items={foodItems} />
      <FoodInput handleOnKeyDown={onKeyDown} />
      {/* <p className="pfont">{textToShow}</p> */}
      <FoodItems items={foodItems} />
    </Container>

    {/* <Container>
      <p>Above is a food item list that are good for health.</p>
    </Container> */}

  </>;
}

export default App;

// <> </> is a shorthand for React.Fragment which work without importing react else we have to 'import react from "react"'