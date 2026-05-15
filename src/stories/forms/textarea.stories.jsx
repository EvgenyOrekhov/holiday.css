import React from "react";

export default {
  title: "Forms/<textarea>",
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
    placeholder: {
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
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

const Template = (args) => <textarea {...args} />;

export const textarea = {
  render: Template,
  name: "<textarea>",
};

export const placeholder = {
  render: Template,
  name: "placeholder",

  args: {
    placeholder: "Placeholder",
  },
};

export const value = {
  render: Template,
  name: "value",

  args: {
    defaultValue: "Example",
  },
};

export const disabled = {
  render: Template,
  name: "disabled",

  args: {
    defaultValue: "Disabled",
    disabled: true,
  },
};

export const readonly = {
  render: Template,
  name: "readonly",

  args: {
    defaultValue: "Read-only",
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
    defaultValue: "Required filled",
    required: true,
  },
};
