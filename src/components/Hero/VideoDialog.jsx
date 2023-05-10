import React from "react";
import { Dialog } from "@mui/material";
const VideoDialog = ({ handleClose, open }) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        sx: { width: "100%", borderRadius: '20px', m: 2,backgroundColor: 'transparent',overflow:'hidden'},
        style: { backgroundColor: 'transparent' }
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
