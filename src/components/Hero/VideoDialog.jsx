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
              "linear-gradient(90deg, rgb(12, 76, 130) -13.51%, rgb(13, 79, 132) -12.59%, rgb(24, 123, 162) 5.14%, rgb(31, 155, 184) 20.99%, rgb(36, 175, 197) 34.24%, rgb(38, 182, 202) 43.28%, rgb(48, 185, 199) 50.27%, rgb(77, 191, 190) 62.37%, rgb(122, 203, 175) 78.1%, rgb(177, 216, 158) 94.53%) ",
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
