import React from "react";

export default {
  title: "Inline text semantics/<time>",
};

export const time = () => (
  <time dateTime="2004-09-22T16:16:00+1000">
    September 22, 2004, at 4:16 PM
  </time>
);

time.storyName = "<time>";
