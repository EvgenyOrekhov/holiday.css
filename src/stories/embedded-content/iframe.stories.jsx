import React from "react";

export default {
  title: "Embedded content/<iframe>",
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
  },
};

export const iframe = {
  render: () => <iframe src="https://example.com/"></iframe>,
  name: "<iframe>",
};
