import React, {useState} from "react";


const Profile = () =>
{

    const [profile, setProfile] = useState({
    name: "Dawid",
    email: "PiesDawid@gmail.com"
})


    function handleEmailChange()
    {
        profile.email === "PiesDawid@gmail.com" ?

        setProfile(prevEmail => (
            {
                ...prevEmail, email: "KotDawid@gmail.com"
            }
        )) : setProfile((prevEmail =>(
                {
                    ...prevEmail, email: "PiesDawid@gmail.com"
                }
            )))
    }

    return(
        <>
            <p> {profile.name}, {profile.email} </p>
            <button onClick={handleEmailChange}  >Zmien Email</button>

        </>
    )

}
export default Profile