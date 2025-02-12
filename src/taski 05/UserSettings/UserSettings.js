import React, {useState} from "react";


const UserSettings = () =>
{

    const [userSettings, setUserSettings] = useState({
        name: "Kot",
        email: "KotPawel@gmail.com",
        notifications: true


        })


    function handleNotificationChange()
    {
        userSettings.notifications === true ? setUserSettings(prevUserSettings=> (
            {
                ...prevUserSettings, notifications: false
            }
        )) : setUserSettings(prevUserSettings=> (
            {
                ...prevUserSettings, notifications: true
            }
        ))

    }
    function handleUserNameChange()
    {
        userSettings.name === "Pies" ? setUserSettings(prevUserSettings=> (
            {
                ...prevUserSettings, name: "Kot"
            }
        )) : setUserSettings(prevUserSettings=> (
            {
                ...prevUserSettings, name: "Pies"
            }
        ))

    }


    return(
        <div>
            <p> {userSettings.name} {userSettings.email} {userSettings.notifications === true ? "Powiadomienia ON" : "Powiadomienia OFF"}  </p>
            <button onClick={handleUserNameChange}>Zmien nazwe urzytkownika</button>
            <button onClick={handleNotificationChange}>Zmien stan powiadomien</button>

        </div>
    )


}
export default UserSettings