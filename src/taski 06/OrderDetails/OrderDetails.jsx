import React, {useState} from "react";

const OrderDetails = () =>
{
    const [orderDetails, setOrderDetails] = useState({
        productName: "Mąka",
        quantity: "1000 kg",
        name: "Adrian",
        city: "Zamośc",
        zip: "22-400"
    })

function handleQuantityChange()
{
    orderDetails.quantity === "1000 kg" ?
    setOrderDetails(prevOrderDetails => (
        {
            ...prevOrderDetails, quantity: "2000 kg"
        }
    ) ) : setOrderDetails(prevOrderDetails => ({

        ...prevOrderDetails, quantity: "1000 kg"

        }))

}

































function handleZipCodeChange()
{

   orderDetails.zip === "22-400" ? setOrderDetails(prevCustomer => ({

        ...prevCustomer, zip: "00-039"



    })):setOrderDetails(prevCustomer => ({

       ...prevCustomer, zip: "22-400"



   }))


}

    return(
        <>
            <p> {orderDetails.name} , {orderDetails.productName}, {orderDetails.quantity}, {orderDetails.city} {orderDetails.zip}     </p>
            <button onClick={handleQuantityChange}   > Zmien Ilosc</button>
            <button onClick={handleZipCodeChange}  > aktualizuj kod pocztowy </button>

        </>
    )
}
export default OrderDetails