import Button from "@restart/ui/esm/Button"
import One_Ingredient from "./One_Ingredient"
import './Selectes_Ingredients.css'

export default function Selected_Ingredients({selected_ingredients , deselect_ingredient}) {
    const selected_ingredient_elements = selected_ingredients.map((e, index) => {
        return <One_Ingredient deselect_ingredient={deselect_ingredient} key={index} data={e} />
    })
    return (
        <div className='Selected_Ingredients'>
            <div className='title'>
                <p>LIST OF SELECTED INGREDIENTS</p>
                <p>(tap to deselect)</p>
            </div>
            
           {selected_ingredient_elements}
        </div>
    )
}
