import React from "react";
import { Dialog } from "@mui/material";
const VideoDialog = ({ handleClose, open, vidRef, clipRef, movie }) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        sx: { width: "100%", borderRadius: 5, m: 2, minHeight: "60vh" },
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="video_clip" ref={clipRef}>
        <video src={movie} ref={vidRef} controls></video>
        <b class="close" onClick={handleClose}>
          Close
        </b>
      </div>
    </Dialog>
  );
};

export default VideoDialog;
