function FoodItems(props){
    return(
        <>
        <div>
            <ul>
                <li>{props.data[0].name}</li>
                <li>{props.data[0].price}</li>
                <li>{props.data[0].description}</li>
                <li>{props.data[1].name}</li>
                <li>{props.data[1].price}</li>
                <li>{props.data[1].description}</li>
                <li>{props.data[2].name}</li>
                <li>{props.data[2].price}</li>
                <li>{props.data[2].description}</li>
            </ul>
        </div>
        </>
    )
}
export default FoodItems;