import {all_ingredients_data} from "./data"
import {useState} from "react"
import Available_Ingredients from "./components/Available_Ingredients/Available_Ingredients"
import Selected_Ingredients from "./components/Selected_Ingredients/Selected_Ingredients"
import Minimum_Costs_and_Stores from "./components/Minimum_Costs_and_Stores/Minimum_Costs_and_Stores"
import './App.css'

function App() {
  const [available_ingredients , set_available_ingredients] = useState(all_ingredients_data)
  const [selected_ingredients , set_selected_ingredients] = useState([])

  const select_ingredient = (to_be_selected) => {
    set_selected_ingredients(add_element_to_array( to_be_selected  ,selected_ingredients))
    set_available_ingredients(remove_element_from_array( to_be_selected  , available_ingredients))
  }
  const deselect_ingredient = (to_be_removed) => {
    set_available_ingredients(add_element_to_array( to_be_removed  , available_ingredients))
    set_selected_ingredients(remove_element_from_array( to_be_removed  ,selected_ingredients))
  }

  const add_element_to_array = (element , array) => {
    var temp = array
    temp.push(element)
    return temp
  }
  const remove_element_from_array = (element , array) => {
    return array.filter(e => e != element)
  }

  return (
    <div className="App">
      <Available_Ingredients select_ingredient={select_ingredient} available_ingredients={available_ingredients} />
      
      <Selected_Ingredients deselect_ingredient={deselect_ingredient} selected_ingredients={selected_ingredients} />
      
      <Minimum_Costs_and_Stores  selected_ingredients={selected_ingredients}/>
    </div>
  );
}

export default App;
