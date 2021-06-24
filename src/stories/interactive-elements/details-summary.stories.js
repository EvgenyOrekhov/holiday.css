import React from "react";

export default {
  title: "Interactive elements/<details>, <summary>",
  argTypes: {
    open: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

const Template = (args) => (
  <details {...args}>
    <summary>Example</summary>
    Example
  </details>
);

export const closed = Template.bind({});

closed.storyName = "closed";

export const open = Template.bind({});

open.storyName = "open";
open.args = {
  open: true,
};

const MultipleTemplate = (args) => (
  <>
    <details {...args}>
      <summary>Example</summary>
      Example
    </details>
    <details {...args}>
      <summary>Example</summary>
      Example
    </details>
    <details {...args}>
      <summary>Example</summary>
      Example
    </details>
    <details {...args}>
      <summary>Example</summary>
      Example
    </details>
  </>
);

export const multipleClosed = MultipleTemplate.bind({});

multipleClosed.storyName = "multiple closed";

export const multipleOpen = MultipleTemplate.bind({});

multipleOpen.storyName = "multiple open";
multipleOpen.args = {
  open: true,
};
