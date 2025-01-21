import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import "./App.css";
import FootInput from "./components/FoodInput";

function App() {
  let foodItems = ['dal', 'roti', 'green vegetables', 'salad', 'milk', 'ghee'];
  // let foodItems = [];
  return <>
    <Container>
      <h1 className="food-heading">Healthy food</h1>
      <ErrorMessage items={foodItems} />
      <FootInput />
      <FoodItems items={foodItems} />
    </Container>

    {/* <Container>
      <p>Above is a food item list that are good for health.</p>
    </Container> */}

  </>;
}

export default App;

// <> </> is a shorthand for React.Fragment which work without importing react else we have to 'import react from "react"'