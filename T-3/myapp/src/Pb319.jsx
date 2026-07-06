// Create a React function component named File1 that receives two props, productName and
// price. The component should display the product name and price. Additionally, add a button
// labeled "Add to cart" to the component. When the button is clicked onClick event triggered and
// an alert should be displayed with the message "Your Product is Added to cart!"

import Pb319_2 from './Pb319_2.jsx';

function Pb319(){
    const data = {
        'productName':'Laptop',
        'price':50000
    }

    return(<>
    <Pb319_2 data={data} />
    </>)
}
export default Pb319;