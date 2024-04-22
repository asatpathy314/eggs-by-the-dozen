import { useEffect, useRef } from "react";
import axios from "axios";

const Roboflow = ({ userImage, confidence, overlap, setNumberOfEggs }) => {
    const PROJECT_URL = `https://detect.roboflow.com/parasites-trgfz/1`;
    const canvasRef = useRef(null);

    useEffect(() => {
        if (userImage) {
            startInfer();
        }
    }, [userImage]);

    const startInfer = () => {
        const formData = new FormData();
        formData.append("file", userImage);
        // Use axios to send request to Roboflow's API
        axios({
            method: "POST",
            url: PROJECT_URL,
            params: {
                api_key: import.meta.env.VITE_ROBOFLOW_API_KEY, //Insert API Key
                confidence: confidence,
                overlap: overlap
            },
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then((response) => {
            const detections = response.data.predictions;
            drawBoxes(detections);
        })
        .catch((error) => {
            console.error("Error during inference:", error);
        });
    };

    const drawBoxes = (detections) => {
        const ctx = canvasRef.current.getContext("2d");
        const img = new Image();
        img.onload = () => {
            canvasRef.current.width = img.width;
            canvasRef.current.height = img.height;
            ctx.drawImage(img, 0, 0);
            detections.forEach(detection => {
                const { x, y, width, height, class: className, confidence } = detection;
                // Adjust x and y to represent the top-left corner (Roboflow returns centered coordinates)
                const adjustedX = x - width / 2; 
                const adjustedY = y - height / 2;
                ctx.strokeStyle = "#2cb67d";
                ctx.lineWidth = 2;
                ctx.strokeRect(adjustedX, adjustedY, width, height);
                ctx.fillStyle = "#010101";
                ctx.fillText(`Confidence : (${(confidence * 100).toFixed(2)}%)`, adjustedX, adjustedY - 10);
            });
        };
        setNumberOfEggs(detections.length)
        img.src = URL.createObjectURL(userImage);
    };
    

    return (
        <canvas ref={canvasRef} className="absolute mx-auto left-0 right-0 text-center z-20" />
    );
};

export default Roboflow;
