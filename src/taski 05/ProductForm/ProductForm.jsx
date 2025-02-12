import React, {useState} from "react";


const ProductForm = (props) =>
{
   const [price,setPrice] = useState("3.14")
   const [name, setName] = useState("Jabłko")
   const [category, setCategory]= useState("Owoce")

    function handleClick()
    {
        setPrice("4.12")
    }
    return(
        <>
            {/*alert(`${price} ${name} ${category}  `)*/ }
            {console.log("zaladowano")}

            <button onClick={handleClick}   >Zmien cene</button>


        </>
    )
}
export default ProductForm

