import React from "react";

export default {
  title: 'Forms/<input>/type="color"',
  argTypes: {
    alpha: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    colorspace: {
      type: { name: "select", required: false },
      options: ["limited-srgb", "display-p3"],
      table: {
        type: { summary: "select" },
        defaultValue: { summary: "limited-srgb" },
      },
    },
    disabled: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      name: "readonly",
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

const Template = (args) => <input type="color" {...args} />;

export const color = {
  render: Template,
  name: 'type="color"',
};

export const alpha = {
  render: Template,
  name: "alpha",

  args: {
    alpha: true,
  },
};

export const displayP3 = {
  render: Template,
  name: "display-p3",

  args: {
    colorspace: "display-p3",
  },
};

export const displayP3Alpha = {
  render: Template,
  name: "display-p3 with alpha",

  args: {
    colorspace: "display-p3",
    alpha: true,
  },
};

export const WithDatalist = {
  render: (args) => (
    <>
      <input type="color" list="preset-colors" {...args} />
      <datalist id="preset-colors">
        <option value="#ff0000">Red</option>
        <option value="#00ff00">Green</option>
        <option value="#0000ff">Blue</option>
        <option value="#ffffff">White</option>
        <option value="#000000">Black</option>
      </datalist>
    </>
  ),

  name: "with <datalist>",
};

export const disabled = {
  render: Template,
  name: "disabled",

  args: {
    disabled: true,
  },
};

export const readonly = {
  render: Template,
  name: "readonly",

  args: {
    readOnly: true,
  },
};
