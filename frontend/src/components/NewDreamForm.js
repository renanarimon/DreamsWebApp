import { useState } from "react";

const NewDreamForm = () => {
    const [title, setTitle] = useState('')
    // console.log(`title: ${title}`);
    return(        
        <form className="new-dream-form">
            <h2>Add new dream</h2>
            <label>Dream Title:</label>
            <input
            type="text"
            onChange={(e) => setTitle(e.text)}            
            />
        </form>       
    )
}

export default NewDreamForm