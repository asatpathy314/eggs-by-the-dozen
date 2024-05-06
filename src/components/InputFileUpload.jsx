import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload({
  userImage,
  setUserImage,
  userPrompt,
  setUserPrompt,
}) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      startIcon={<CloudUploadIcon />}
      sx={{
        backgroundColor: "#7f5af0", // This sets the background color of the button
        "&:hover": {
          backgroundColor: "#A58AF4", // Replace with the color you want on hover
        },
      }}
    >
      Upload
      <VisuallyHiddenInput
        type="file"
        accept=".jpg, .png"
        onChange={(event) => {
          if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].size > 1 * 1000 * 1024) {
              let userPromptCopy = userPrompt.slice();
              userPromptCopy[0] = "File too large!";
              userPromptCopy[1] = -1;
              setUserPrompt(userPromptCopy);
            } else if (event.target.files.length > 1) {
              let userPromptCopy = userPrompt.slice();
              userPromptCopy[0] =
                "Only single-file upload is supported at this time";
              userPromptCopy[1] = -1;
              setUserPrompt(userPromptCopy);
            } else {
              setUserImage(event.target.files[0]);
            }
          }
        }}
      />
    </Button> //Care this is a potential malicious file upload attack vector
  );
}
