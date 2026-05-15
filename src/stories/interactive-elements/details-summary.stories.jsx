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

export const closed = {
  render: Template,
  name: "closed",
};

export const open = {
  render: Template,
  name: "open",

  args: {
    open: true,
  },
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

export const multipleClosed = {
  render: MultipleTemplate,
  name: "multiple closed",
};

export const multipleOpen = {
  render: MultipleTemplate,
  name: "multiple open",

  args: {
    open: true,
  },
};

export const ExclusiveAccordion = {
  render: () => (
    <>
      <details name="exclusive-accordion-example">
        <summary>Example</summary>
        Example
      </details>
      <details name="exclusive-accordion-example" open>
        <summary>Example</summary>
        Example
      </details>
      <details name="exclusive-accordion-example">
        <summary>Example</summary>
        Example
      </details>
      <details name="exclusive-accordion-example">
        <summary>Example</summary>
        Example
      </details>
    </>
  ),

  name: "exclusive accordion",
};
