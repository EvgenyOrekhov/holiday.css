import React from "react";

export default {
  title: "Image and multimedia/<video>",
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
  },
};

export const video = () => (
  <video controls loop src="https://holidaycss.js.org/nyan-cat.mp4"></video>
);

video.storyName = "<video>";
