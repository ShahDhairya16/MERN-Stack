// Write a react code to render component to display all array elements in h2 tag using map function

// function Map1() {
//     const arr = [1, 2, 3, 4, 5]
//     return (
//         <>
//         <h1>Example of mapping</h1>
//         {
//             arr.map((value) => {
//                 return <h2>Array Element = {value}</h2>
//             })
//         }
//         </>
//     )
// }
// export default Map1


// Write react code to render a componant which display array elements which are >3.

function Map1() {
    const arr = [1, 2, 3, 4, 5]
    return (
        <>
            <h1>Example of mapping</h1>
            {
                arr.map((value) => {
                    if (value > 3) {
                        return <h2>Array Element greater than 3 = {value}</h2>
                    }
                })
            }
        </>
    )
}
export default Map1