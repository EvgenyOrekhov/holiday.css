import React from "react";

export default {
  title: "Embedded content/<embed>",
};

export const embed = () => (
  <embed type="video/mp4" src="https://holidaycss.js.org/nyan-cat.mp4" />
);

embed.storyName = "<embed>";
