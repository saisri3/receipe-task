import { stores_data } from '../../data'
import One_Minimum from './One_Minimum'
import './Minimum_Costs.css'

export default function Minimum_Costs_and_Stores({selected_ingredients }) {
    
    
    const find_minimums = () => {
        const result = {}
        stores_data.forEach((one_store) => {
            selected_ingredients.forEach(one_ingredient => {
                if(!result[one_ingredient])
                result[one_ingredient] = {
                    ingredient_name : one_ingredient,
                        cost : one_store.cost_of_ingredients[one_ingredient],
                        store_name : one_store.store_name
                    }
                else{
                    if(result[one_ingredient].cost > one_store.cost_of_ingredients[one_ingredient])
                    result[one_ingredient] = {
                        ingredient_name : one_ingredient,
                        cost : one_store.cost_of_ingredients[one_ingredient],
                        store_name : one_store.store_name
                    }
                }
            })
        })
        return result
    }
    const minimums = find_minimums(selected_ingredients)
    

    
    
    const rendered_minimum_elements = Object.values(minimums).map((e , index) => {
        return <One_Minimum data={e} key={index} />
    })
    
    return (
        <div className='summary'>
            <p>SUMMARY</p>
            <div className='table'style={{background:"gray"}}>
                <p>INGREDIENT</p>
                <p>COST</p>
                <p>STORE</p>
            </div>
            {rendered_minimum_elements}
        </div>
    )
}
