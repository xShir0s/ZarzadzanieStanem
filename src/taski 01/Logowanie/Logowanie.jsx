import React, {useState} from "react";


const Logowanie = () =>
{
    const [zalogowanie, setZalogowanie] = useState(false)

    function HandleLogin()
    {

        if(zalogowanie)
        {



            setZalogowanie(false)
            console.log("zalogowano")
        }
        else
        {

            setZalogowanie(true)
            console.log("wylogowano")
        }
    }

    return(
        <>


            {zalogowanie === true ? <div>Zalogowano! <p>Wyloguj się!</p>  </div> : <div>Nie Zalogowano! <p>zaloguj się!</p> </div>}
            <button onClick={HandleLogin}>Kliknij</button>


        </>
    )


}
export default Logowanie