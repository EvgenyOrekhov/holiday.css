import React from "react";

export default {
  title: 'Forms/<input>/type="number"',
  argTypes: {
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
    required: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    defaultValue: {
      name: "value",
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
  },
};

const Template = (args) => <input type="number" {...args} />;

export const number = {
  render: Template,
  name: 'type="number"',
};

export const value = {
  render: Template,
  name: "value",

  args: {
    defaultValue: "42",
  },
};

export const disabled = {
  render: Template,
  name: "disabled",

  args: {
    defaultValue: "42",
    disabled: true,
  },
};

export const readonly = {
  render: Template,
  name: "readonly",

  args: {
    defaultValue: "42",
    readOnly: true,
  },
};

export const requiredEmpty = {
  render: Template,
  name: "required empty",

  args: {
    required: true,
  },
};

export const requiredFilled = {
  render: Template,
  name: "required filled",

  args: {
    defaultValue: "42",
    required: true,
  },
};
