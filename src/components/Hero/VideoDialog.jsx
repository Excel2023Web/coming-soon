import React from "react";
import { Dialog } from "@mui/material";
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
              "linear-gradient(90deg, #0C4C82 -13.51%, #0D4F84 -12.59%, #187BA2 5.14%, #1F9BB8 20.99%, #24AFC5 34.24%, #26B6CA 43.28%, #30B9C7 50.27%, #4DBFBE 62.37%, #7ACBAF 78.1%, #B1D89E 94.53%)",
          },
        },
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="video_clip">
        <video
          src="https://excel-22-website.s3.ap-south-1.amazonaws.com/coming-soon/Comin%20Soon_1.mp4"
          muted
          autoPlay
        ></video>
      </div>
    </Dialog>
  );
};

export default VideoDialog;
