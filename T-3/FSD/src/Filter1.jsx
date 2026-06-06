// Write react code to filter out The numbers > 6 using filter function.

function Filter1() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div>
            <h2>Filtered Array : </h2>
            {
                arr.filter((value) => value > 6).map((value) => {
                    return <h2>Array Element greater than 6 = {value}</h2>
                })
            }
        </div>
    )
}

export default Filter1