function Product() {

    const students = [
        { id: 1, name: 'abc', std: 5 },
        { id: 2, name: 'xyz', std: 6 },
        { id: 3, name: 'pqr', std: 5 },
        { id: 4, name: 'def', std: 7 },
        { id: 5, name: 'ghi', std: 5 },
    ];

    // Filter students with std 5 and increase std by 1
    const std5 = students
        .filter((student) => student.std === 5)
        .map((student) => {
            return {
                ...student,
                std: student.std + 1
            };
        });

    return (
        <>
            <h1>Students with Updated Std</h1>

            {
                std5.map((student) => (
                    <h2 key={student.id}>
                        {student.name} - Std {student.std}
                    </h2>
                ))
            }
        </>
    );
}

export default Product;