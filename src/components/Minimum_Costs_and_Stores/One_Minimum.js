import './One_Minimum.css'

export default function One_Minimum({data : {ingredient_name , cost , store_name}}) {
    return (
        <div className='table'>
            
            <span>
                {ingredient_name}
            </span>
            <span>
                {cost}
            </span>
            <span>
                {store_name}
            </span>
        </div>
    )
}
