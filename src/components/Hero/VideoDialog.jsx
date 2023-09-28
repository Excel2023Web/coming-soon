import React from "react";
import { Dialog } from "@mui/material";
// import afterMovie from "../../assets/mp4/aftermovie.mp4";

const VideoDialog = ({ handleClose, open }) => {
  return (
    <Dialog
  fullWidth={true}
  maxWidth={"md"}
  PaperProps={{
    sx: {
      width: "100%",
      borderRadius: "20px",
      m: 2,
      backgroundColor: "transparent",
      overflow: "hidden",
    },
    style: { backgroundColor: "transparent" },
  }}
  slotProps={{
    backdrop: {
      style: {
        opacity: 0.5,
        background:
          "linear-gradient(to right, #e96443, #904e95)",
      },
    },
  }}
  open={open}
  onClose={handleClose}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
>
  <div className="video-container">
    <video preload="auto" muted autoPlay>
      <source
        src="https://storage.googleapis.com/excel-mec-2023-static-8267634/aftermovie2022-h264.mp4"
        type="video/mp4"
      ></source>
      <source
        src="https://storage.googleapis.com/excel-mec-2023-static-8267634/aftermovie2022.webm"
        type="video/webm"
      ></source>
    </video>
  </div>
</Dialog>
  );
};

export default VideoDialog;
