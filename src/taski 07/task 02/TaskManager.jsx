import React, {useState} from "react";
import Profile from "../../taski 06/Profile/Profile";


const TaskManager = () => {

    function handleTaskAdttion() {
        setTasks(prevTasks => [...prevTasks, document.getElementById("InputLabel").value])

    }

    function handleTaskRemoval() {
        setTasks(prevTasks => prevTasks.filter(task => task !== document.getElementById("IndexLabel").value))
    }

    const [task, setTasks] = useState([
        "Zjeśc Śniadanie", "Umyć się", "Odrobić lekcje"


    ])
    const [edited, setEdited] = useState(false)


    return (
        <>
            <p><input id={"InputLabel"} type={"text"}/>

                <button onClick={handleTaskAdttion}>Dodaj Taska</button>
            </p>


            {edited === false ? <div>
                {task.map((tasks, index) => (
                    <li key={index}> {index} {tasks}</li>
                ))}
            </div> : <div> {task.map((tasks, index) => (
                <li key={index}> {index} {tasks}  </li>
            ))}</div>}
            <input id={"IndexLabel"} type={"text"}/>
            <button onClick={handleTaskRemoval}>Usuń Taska</button>
            <input/>
        </>
    )


}
export default TaskManager