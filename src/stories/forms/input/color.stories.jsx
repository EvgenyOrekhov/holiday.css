import React from "react";

export default {
  title: 'Forms/<input>/type="color"',
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
  },
};

const Template = (args) => <input type="color" {...args} />;

export const color = Template.bind({});

color.storyName = 'type="color"';

export const disabled = Template.bind({});

disabled.storyName = "disabled";
disabled.args = {
  disabled: true,
};

export const readonly = Template.bind({});

readonly.storyName = "readonly";
readonly.args = {
  readOnly: true,
};
