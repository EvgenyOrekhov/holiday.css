import React from "react";

export default {
  title: "Embedded content/<picture>, <source>",
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
  },
};

export const equalOrNarrowerThanScreen = {
  render: () => (
    <picture>
      <source
        srcSet="https://holidaycss.js.org/1440x150.svg"
        media="(min-width: 1440px)"
      />
      <source
        srcSet="https://holidaycss.js.org/1024x150.svg"
        media="(min-width: 1024px)"
      />
      <source
        srcSet="https://holidaycss.js.org/768x150.svg"
        media="(min-width: 768px)"
      />
      <source
        srcSet="https://holidaycss.js.org/320x150.svg"
        media="(min-width: 320px)"
      />
      <img src="https://holidaycss.js.org/150.svg" alt="Placeholder" />
    </picture>
  ),

  name: "equal or narrower than screen (multiple sources)",
};

export const widerThanScreen = {
  render: () => (
    <picture>
      <source
        srcSet="https://holidaycss.js.org/1440x150.svg"
        media="(min-width: 1024px)"
      />
      <source
        srcSet="https://holidaycss.js.org/1024x150.svg"
        media="(min-width: 768px)"
      />
      <source
        srcSet="https://holidaycss.js.org/768x150.svg"
        media="(min-width: 320px)"
      />
      <img src="https://holidaycss.js.org/320.svg" alt="Placeholder" />
    </picture>
  ),

  name: "wider than screen (multiple sources)",
};

export const onlyImg = {
  render: () => (
    <picture>
      <img src="https://holidaycss.js.org/1920x1080.svg" alt="Placeholder" />
    </picture>
  ),

  name: "only <img>",
};
