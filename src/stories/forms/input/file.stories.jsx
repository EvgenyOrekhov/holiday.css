import React from "react";

export default {
  title: 'Forms/<input>/type="file"',
  argTypes: {
    disabled: {
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
  },
};

const Template = (args) => <input type="file" {...args} />;

export const file = {
  render: Template,
  name: 'type="file"',
};

export const disabled = {
  render: Template,
  name: "disabled",

  args: {
    disabled: true,
  },
};

export const required = {
  render: Template,
  name: "required",

  args: {
    required: true,
  },
};
