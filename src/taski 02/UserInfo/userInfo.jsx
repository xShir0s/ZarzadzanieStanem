import React, {useState} from "react";

const UserInfo = () =>
{
    const [firstName, setFirstName] = useState("John")
    const [secondName,setSecondName] = useState("Doe")

    function handleClick()
    {
        if(firstName=="John")
        {
            setFirstName("Maria")
            setSecondName("Kowalska")
        }else
        {
            setFirstName("John")
            setSecondName("Doe")
        }
    }


    return(
        <>

          <p>  {firstName}, {secondName}</p>

            <button onClick={handleClick}   >Zmien imiona</button>

        </>
    )

}
export default UserInfo