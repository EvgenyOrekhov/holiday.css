import React from "react";

export default {
  title: "Embedded content/<object>",
  parameters: {
    chromatic: {
      viewports: [320, 1200],
      delay: 3000,
    },
  },
};

export const object = () => (
  <object
    type="application/pdf"
    data="https://holidaycss.js.org/sample.pdf"
  ></object>
);

object.storyName = "<object>";
