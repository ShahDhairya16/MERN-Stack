// function Event() {

//     function handle() {
//         alert("Welcome to LJU")
//     }

// function handelChange(e) {
//     console.log(e.target.value);
// }

// function handleSubmit(e){
//     e.preventDefault();
//     alert('You Clicked')
// }

//     return (
//         <>
//             {/* <button onClick={handle}>Click Me</button> */}
//             {/* <input type="text" onChange={handelChange} /> */}
//             <form action="" onSubmit={handleSubmit}>
//                 <input type="text" />
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     )
// }

// Create a component to perform a task below.
// Add a text feild and a submit button, while changing the value.(Prevent default behaviour of form)
// Display it below display value in alert box on submitting it. Add a button to perform click snd doubleClick event. OnClick event, display msg "You clicked once" in H3 tag". On dounleXClick event display "you clicked twice". Msg should be displayed below the button.
function Event() {

    function handleSubmit(e) {
        e.preventDefault()
        alert(document.getElementById('uname').value)
    }

    function handlechange(e) {
        document.getElementById('test').innerHTML = e.target.value
    }

    function handleClick() {
        document.getElementById('test1').innerHTML = "Clicked once"

    }

    function handleDoubleClick() {
        document.getElementById('test1').innerHTML = "Clicked twice"

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="uname" onChange={handlechange} />
                <button type="submit">Submit</button>
            </form>
            <h3 id="test">On change event</h3>
            <button onClick={handleClick} onDoubleClick={handleDoubleClick}>Click event</button>
            <h3 id='test1'>Click/DoubleClick event</h3>
        </div>
    )
}
export default Event