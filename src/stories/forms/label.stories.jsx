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

export const labelWithMarkup = () => (
  <label>
    Example label <strong>with some</strong> markup
  </label>
);

labelWithMarkup.storyName = "<label> with markup";

export const inputInsideLabelWithMarkup = () => (
  <label>
    Example label <strong>with some</strong> markup
    <input />
  </label>
);

inputInsideLabelWithMarkup.storyName = "<input> inside <label> with markup";

export const inputAfterLabelWithMarkup = () => (
  <>
    <label htmlFor="label-with-markup-example">
      Example label <strong>with some</strong> markup
    </label>
    <input id="label-with-markup-example" />
  </>
);

inputAfterLabelWithMarkup.storyName = "<input> after <label> with markup";
