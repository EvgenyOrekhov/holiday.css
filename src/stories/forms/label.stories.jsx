import React from "react";

export default {
  title: "Forms/<label>",
};

export const label = {
  render: () => <label>Example</label>,
  name: "<label>",
};

export const inputInsideLabel = {
  render: () => (
    <label>
      Example
      <input />
    </label>
  ),

  name: "<input> inside <label>",
};

export const inputAfterLabel = {
  render: () => (
    <>
      <label htmlFor="label-example">Example</label>
      <input id="label-example" />
    </>
  ),

  name: "<input> after <label>",
};

export const labelWithMarkup = {
  render: () => (
    <label>
      Example label <strong>with some</strong> markup
    </label>
  ),

  name: "<label> with markup",
};

export const inputInsideLabelWithMarkup = {
  render: () => (
    <label>
      Example label <strong>with some</strong> markup
      <input />
    </label>
  ),

  name: "<input> inside <label> with markup",
};

export const inputAfterLabelWithMarkup = {
  render: () => (
    <>
      <label htmlFor="label-with-markup-example">
        Example label <strong>with some</strong> markup
      </label>
      <input id="label-with-markup-example" />
    </>
  ),

  name: "<input> after <label> with markup",
};
