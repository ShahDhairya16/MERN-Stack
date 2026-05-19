// Write a react component to render a component to display all array elements in h2 tag using map function

// function Map1() {
//     const arr = [1,2,3,4,5]
//     return (
// <>
//         <h1>Example of Mapping</h1>
//         {
//             arr.map((value) => {
//                 return <h2>{value}</h2>
//             }
//             )
//         }
        
// </>
//     )
// }
// export default Map1

// Write react code to render a component which display the array elements which are greater than 3

function Map2() {
    const arr = [1,2,3,4,5,6,7,8,8,9,10]
    return (
<>
        <h1>Example of Filter</h1>
        {
            arr.filter((value) => value > 3).map((value) => {
                return <h2>{value}</h2>
            }   
            )
        }
        <h1>Example of map using as Filter</h1>
        {
            arr.map((value) =>{
                if(value > 3){
                    return <h2>{value}</h2>
                }
                else{
                    return null
                }
            })
}
</>
    )
}
export default Map2
