import { useState } from "react";
import Button from "./button";
import axios from "axios";

const Tasks = () => {
    const [tasks, setTasks] = useState<{ id: string, title: string }[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>();

    const handleLoadTasks = async () => {
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");

            setTasks(data);
            setErrorMessage(undefined);
        } catch (error) {
            setErrorMessage("Failed to load tasks. Please try again.");
        }
    }

    return (
        <>
            <h1>Tasks from API</h1>
            <Button onClick={handleLoadTasks}>
                Load Tasks
            </Button>

            {errorMessage && <p role="alert" className="text-red-400 italic">{errorMessage}</p>}

            <ul>
                {tasks.length > 0 && tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </>
    )
}

export default Tasks;