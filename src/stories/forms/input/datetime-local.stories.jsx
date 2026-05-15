import React from "react";

export default {
  title: 'Forms/<input>/type="datetime-local"',
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

const Template = (args) => <input type="datetime-local" {...args} />;

export const datetimeLocal = {
  render: Template,
  name: 'type="datetime-local"',
};

export const value = {
  render: Template,
  name: "value",

  args: {
    defaultValue: "2004-09-22T16:16:00",
  },
};

export const disabled = {
  render: Template,
  name: "disabled",

  args: {
    defaultValue: "2004-09-22T16:16:00",
    disabled: true,
  },
};

export const readonly = {
  render: Template,
  name: "readonly",

  args: {
    defaultValue: "2004-09-22T16:16:00",
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
    defaultValue: "2004-09-22T16:16:00",
    required: true,
  },
};
