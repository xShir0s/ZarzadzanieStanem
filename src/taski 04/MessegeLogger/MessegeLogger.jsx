import React, {useState} from "react";



let count =0


const MessegeLogger = () =>
{
    const [messege, setNewMessege] = useState(["wiadomosc 0"])

    function handleClick()
    {
        count++
        setNewMessege(prevMessege => ({...prevMessege, messege: `Wiadomosc ${count} `}))
        console.log(messege)

    }


    return(
        <>
            <p>
                <button onClick={handleClick}>Dodaj Wiadomosc</button>

                
                <li> {messege.map((message, index) => {
                    <li key={index}>{message}</li>
                })}    </li>
            </p>

        </>
    )

}
export default MessegeLogger