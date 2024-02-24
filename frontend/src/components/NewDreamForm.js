import { useState } from "react";
import FormRow from "./FormRow";

const NewDreamForm = () => {
    const [title, setTitle] = useState('')
    const [dueDate, setDueDate] = useState(null)
    const [tools, setTools] = useState([])
    const [steps, setSteps] = useState([])
    console.log(`title: ${title}, Date: ${dueDate}`);
    return (
        <form className="new-dream-form">
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

        </form>
    )
}

export default NewDreamForm