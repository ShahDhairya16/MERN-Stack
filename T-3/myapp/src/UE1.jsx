import { useState, useEffect } from 'react';

function UE1() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // Cleanup function
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            Time - {date.toLocaleString()} <br />
            Hours - {date.getHours()} :
            Min - {date.getMinutes()} :
            Sec - {date.getSeconds()}
        </div>
    );
}

export default UE1;