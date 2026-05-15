import React from "react";

export default {
  title: 'Forms/<input>/type="email"',
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

const Template = (args) => <input type="email" {...args} />;

export const email = {
  render: Template,
  name: 'type="email"',
};

export const placeholder = {
  render: Template,
  name: "placeholder",

  args: {
    placeholder: "placeholder@example.com",
  },
};

export const value = {
  render: Template,
  name: "value",

  args: {
    defaultValue: "example@example.com",
  },
};

export const disabled = {
  render: Template,
  name: "disabled",

  args: {
    defaultValue: "disabled@example.com",
    disabled: true,
  },
};

export const readonly = {
  render: Template,
  name: "readonly",

  args: {
    defaultValue: "readonly@example.com",
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
    defaultValue: "required-filled@example.com",
    required: true,
  },
};
