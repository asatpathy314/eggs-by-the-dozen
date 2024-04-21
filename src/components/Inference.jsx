import { useState } from "react";
import { Typography } from "@mui/material";
import InputFileUpload from "./InputFileUpload";
import Roboflow from "./Roboflow";

const Inference = () => {
    const [userImage, setUserImage] = useState(null);
    const [userPrompt, setUserPrompt] = useState(['Upload an Image', 0]);
    const [numberOfEggs, setNumberOfEggs] = useState(null);

    useState(() => {
    }, [userPrompt])

    return (
        <>
            <Typography
            variant = "h2"
            fontWeight = 'bold'
            gutterBottom>
                Strongylid Egg Detection
            </Typography>
            <InputFileUpload 
            userImage={userImage}
            setUserImage={setUserImage}
            userPrompt={userPrompt}
            setUserPrompt={setUserPrompt} />
            {
            // Conditional rendering
            userImage 
            ? 
            <p>Image sucessfully Uploaded.</p> 
            : 
            <p>{userPrompt[0]}</p>
            }
            <Roboflow 
            userImage={userImage}
            confidence={60}
            overlap={50}
            setNumberOfEggs={setNumberOfEggs} />
            {
            numberOfEggs 
            ?
            <Typography
            variant = "h6"
            gutterBottom>
            Number of parasite eggs detected : {numberOfEggs}
            </Typography>
            :
            null
            }
        </>  
    );
}

export default Inference;
