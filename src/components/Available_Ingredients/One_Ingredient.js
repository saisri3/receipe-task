import Button from "@restart/ui/esm/Button";

export default function One_Ingredient({data , select_ingredient}) {
    return (
        <div  className='data'
        onClick={() => select_ingredient(data)}>
            <Button>{data}</Button>
        </div>
    )
}
