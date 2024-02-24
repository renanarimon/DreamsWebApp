import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DreamDetails from "../components/DreamDetails";
import NewDreamForm from "../components/NewDreamForm"

const Home = () => {

    const [dreams, setDreams] = useState(null);

    useEffect(() => {
        //only in first render: fetch api -> get all dreams -> set dreams state
        const fetchDreams = async () => {
            const response = await fetch("/api/dreams");
            const dreamsJson = await response.json();
            if (response.ok) {
                setDreams(dreamsJson)
            }
        }

        fetchDreams();
    }, [])



    return (
        <div className="Home">
            <div className="dreams">
                <h3>my dreams:</h3>
                {dreams
                    &&
                    dreams.map((dream) => (
                        <DreamDetails key={dream._id} dream={dream} />
                    ))}
            </div>
            <NewDreamForm />

        </div>
    )
}

export default Home;