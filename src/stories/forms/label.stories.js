import React from "react";

export default {
  title: "Forms/<label>",
};

export const label = () => <label>Example</label>;

label.storyName = "<label>";

export const inputInsideLabel = () => (
  <label>
    Example
    <input />
  </label>
);

inputInsideLabel.storyName = "<input> inside <label>";

export const inputAfterLabel = () => (
  <>
    <label htmlFor="label-example">Example</label>
    <input id="label-example" />
  </>
);

inputAfterLabel.storyName = "<input> after <label>";
