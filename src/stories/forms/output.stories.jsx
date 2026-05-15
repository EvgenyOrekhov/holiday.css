import React from "react";

export default {
  title: "Forms/<output>",
};

export const single = {
  render: () => <output>Example</output>,
  name: "single",
};

export const multiple = {
  render: () => (
    <>
      <output>Example</output>
      <output>Example</output>
      <output>Example</output>
      <output>Example</output>
    </>
  ),

  name: "multiple",
};
