import React from "react";

export default {
  title: 'Forms/<input>/type="tel"',
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

const Template = (args) => <input type="tel" {...args} />;

export const tel = {
  render: Template,
  name: 'type="tel"',
};

export const placeholder = {
  render: Template,
  name: "placeholder",

  args: {
    placeholder: "123-4567-8901",
  },
};

export const value = {
  render: Template,
  name: "value",

  args: {
    defaultValue: "+61 2 5550 6077",
  },
};

export const disabled = {
  render: Template,
  name: "disabled",

  args: {
    defaultValue: "+61 2 5550 6077",
    disabled: true,
  },
};

export const readonly = {
  render: Template,
  name: "readonly",

  args: {
    defaultValue: "+61 2 5550 6077",
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
    defaultValue: "+61 2 5550 6077",
    required: true,
  },
};
