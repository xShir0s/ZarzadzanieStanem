import React, {useState} from "react";


const Licznik =  () =>
{
    const [counter,setCounter] = useState(0)

    function handleClick()
    {
        setCounter(counter+1)
    }
console.log(counter)

    return(
       <>

        <p>Licznik: {counter}</p>
           <button   onClick={handleClick }   >Kliknij</button>

       </>
    )
}
export  default  Licznik
