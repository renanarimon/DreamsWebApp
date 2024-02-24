
const DreamDetails = ({ dream }) => {
    const tools = dream.tools;
    const steps = dream.steps;

    return (
        <div className="dream-details">
            <h4>{dream.title}</h4>

            <p><strong>Due date: </strong>{dream.dueDate}</p>

            {tools && tools.length > 0 &&
                <p><strong>Tools: </strong>
                    {
                        tools.map((tool, index) => (
                            <span key={index}>{tool}{index !== tools.length - 1 ? ', ' : ''}</span>
                        ))
                    }
                </p>}

            {steps && steps.length > 0 &&
                <p><strong>Steps: </strong>
                    {
                        steps.map((step, index) => (
                            <span key={index}>{step}{index !== steps.length - 1 ? ', ' : ''}</span>
                        ))
                    }
                </p>}

                <p><strong>Created at: </strong>{dream.createdAt}</p>
                <p><strong>Updated at: </strong>{dream.updatedAt}</p>


        </div>
    )
}


export default DreamDetails;