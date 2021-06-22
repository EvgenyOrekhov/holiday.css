import React from "react";

export default {
  title: "Forms/<output>",
};

export const single = () => <output>Example</output>;

single.storyName = "single";

export const multiple = () => (
  <>
    <output>Example</output>
    <output>Example</output>
    <output>Example</output>
    <output>Example</output>
  </>
);

multiple.storyName = "multiple";
