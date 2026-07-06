function Appoitment(props) {
    function booking(e) {
        e.preventDefault();
        alert("Appoitment Booked");
        }
    return (
        <div>
            <h1>Appoitment</h1>
            <p>{ props.data.patientName}</p>
            <p>{props.data.DrName}</p>
            <form onSubmit={booking}>
                <input type="submit" value="Book Appoitment" />
            </form>
        </div>
    );
}

export default Appoitment;