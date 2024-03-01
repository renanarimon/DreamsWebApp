import { useState } from "react";
import FormRow from "./FormRow";

const NewDreamForm = () => {
    const [title, setTitle] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [tools, setTools] = useState(null)
    const [steps, setSteps] = useState(null)

    const [error, setError] = useState(null)

    console.log(`title: ${title}, Date: ${dueDate}, Tools: ${tools}, Steps: ${steps}`);

    /** POST dream: get input from user, and connect to backend to post it into db */
    const handaleAddDream = async (e) => {
        e.preventDefault(); // not render in each refresh, only when click button

        const dream = {title, dueDate, tools, steps};

        const response = await fetch('/api/dreams', {
            method: 'POST', 
            body: JSON.stringify(dream), // send the dream as a json to the POST request
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();
        if(!response.ok){
            setError(json.error);
            console.log(error);
        }else{
            setError(null)            
            console.log(json);
        }
        setTitle('');
        setDueDate('');
        setTools(null);
        setSteps(null);
    }

    return (
        <form className="new-dream-form" onSubmit={handaleAddDream}>
            <h2>Add new dream</h2>
            <FormRow
                label="Title: "
                type="text"
                get={title}
                set={setTitle}
            />
            <FormRow
                label="DueDate: "
                type="number"
                get={dueDate}
                set={setDueDate}
            />
            <FormRow
                label="Tools: "
                type="array"
                get={tools}
                set={setTools}
            />
            <FormRow
                label="Steps: "
                type="array"
                get={steps}
                set={setSteps}
            />
        <button className="btn-edit">Add dream</button>
        {error && <div className="error">{error}</div>}
        </form>
    )
}

export default NewDreamForm