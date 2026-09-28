import React from "react";

export default {
  title: "Content sectioning/<hgroup>",
};

export const hgroup = {
  render: () => (
    <hgroup>
      <h1>Example</h1>
      <p>Supporting text</p>
    </hgroup>
  ),
  name: "<hgroup>",
};

export const multipleParagraphs = {
  render: () => (
    <hgroup>
      <h2>H2 example</h2>
      <p>Supporting text</p>
      <p>Another paragraph</p>
    </hgroup>
  ),
  name: "<hgroup> with multiple paragraphs",
};
