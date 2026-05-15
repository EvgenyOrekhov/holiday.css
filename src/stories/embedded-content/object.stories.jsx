import React from "react";

export default {
  title: "Embedded content/<object>",
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
  },
};

export const object = {
  render: () => (
    <object
      type="application/pdf"
      data="https://holidaycss.js.org/sample.pdf"
    ></object>
  ),

  name: "<object>",
};
