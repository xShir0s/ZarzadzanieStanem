import React from "react";

const RandomNumber = () =>
{
    var randomNumber =  Math.floor( Math.random()*100)

    return(

        <>

            {randomNumber}
        </>

    )
}
export default RandomNumber