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

export const file = Template.bind({});

file.storyName = 'type="file"';

export const disabled = Template.bind({});

disabled.storyName = "disabled";
disabled.args = {
  disabled: true,
};

export const required = Template.bind({});

required.storyName = "required";
required.args = {
  required: true,
};
