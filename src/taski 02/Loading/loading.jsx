import React, {use, useState} from "react";


const Loading = () =>
{

    function handleClick()
    {
        if(loading)
        {
            setLoading(false)
        }else
        {
            setLoading(true)
        }


    }

    const [loading,setLoading] = useState(false)
    return(
        <>


            <p> {loading === true ? <p>Laduje się</p> : <p>Nie Laduje sie</p>}</p>
            <button onClick={handleClick}>Zmien stan</button>

        </>
    );
}
export default Loading