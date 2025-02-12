import React, {useState} from "react";

const MessegeLogger = () =>
{
    const [messages, setMessages] = useState([])

    function handleClick()
    {

        setMessages(prevMessages => [...prevMessages, `Wiadomośc ${prevMessages.length +1} `])
        console.log(messages)

    }


    return(
        <>
            <p>
                <button onClick={handleClick}>Dodaj Wiadomosc</button>

                
                <div> {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}    </div>
            </p>

        </>
    )

}
export default MessegeLogger