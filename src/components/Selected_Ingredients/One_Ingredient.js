import './One_ingredient.css'
export default function One_Ingredient({data , deselect_ingredient}) {
    return (
        <div className='data'
        onClick={() => deselect_ingredient(data)}>
            <button >{data}</button>
        </div>
    )
}
