import One_Ingredient from "./One_Ingredient"
import './Available_Ingredients.css'





export default function Available_Ingredients({available_ingredients , select_ingredient}) {
    const available_ingredient_elements = available_ingredients.map((e, index) => {
        return <One_Ingredient select_ingredient={select_ingredient} key={index} data={e} />
    })
    return (
        <div className="available_ingredients">
            <div class='title'><p>LIST OF INGREDINTS</p>
            <p>(tap to select)</p></div>
            
            <div>{available_ingredient_elements}</div>
          
                     
        </div>
    )
}
