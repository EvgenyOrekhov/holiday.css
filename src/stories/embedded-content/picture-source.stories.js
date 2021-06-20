import React from "react";

export default {
  title: "Embedded content/<picture>, <source>",
};

export const equalOrNarrowerThanScreen = () => (
  <picture>
    <source
      srcset="https://via.placeholder.com/1440x150"
      media="(min-width: 1440px)"
    />
    <source
      srcset="https://via.placeholder.com/1024x150"
      media="(min-width: 1024px)"
    />
    <source
      srcset="https://via.placeholder.com/768x150"
      media="(min-width: 768px)"
    />
    <source
      srcset="https://via.placeholder.com/320x150"
      media="(min-width: 320px)"
    />
    <img src="https://via.placeholder.com/150" alt="Placeholder" />
  </picture>
);

equalOrNarrowerThanScreen.storyName =
  "equal or narrower than screen (multiple sources)";

export const widerThanScreen = () => (
  <picture>
    <source
      srcset="https://via.placeholder.com/1440x150"
      media="(min-width: 1024px)"
    />
    <source
      srcset="https://via.placeholder.com/1024x150"
      media="(min-width: 768px)"
    />
    <source
      srcset="https://via.placeholder.com/768x150"
      media="(min-width: 320px)"
    />
    <img src="https://via.placeholder.com/320" alt="Placeholder" />
  </picture>
);

widerThanScreen.storyName = "wider than screen (multiple sources)";

export const onlyImg = () => (
  <picture>
    <img src="https://via.placeholder.com/1920x1080" alt="Placeholder" />
  </picture>
);

onlyImg.storyName = "only <img>";
