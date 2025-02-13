import React, {useState} from "react";


const FruitList = () =>
{

    const [fruits, setFruits] = useState([
        "Jabłko", "Banan", "Pomarańcz"


    ])

function addFruit()
{
    setFruits(prevFruits => (
        [...prevFruits, "Papaja"]
    ))
}

    return(
        <>
            <p>{fruits.join(", ")}</p>
            <button onClick={addFruit}>Dodaj owoce</button>

        </>
    )
}
export default FruitList