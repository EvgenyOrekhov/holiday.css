import React from "react";

export default {
  title: 'Forms/<input>/type="time"',
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

const Template = (args) => <input type="time" {...args} />;

export const time = Template.bind({});

time.storyName = 'type="time"';

export const value = Template.bind({});

value.storyName = "value";
value.args = {
  defaultValue: "16:16:00",
};

export const disabled = Template.bind({});

disabled.storyName = "disabled";
disabled.args = {
  defaultValue: "16:16:00",
  disabled: true,
};

export const readonly = Template.bind({});

readonly.storyName = "readonly";
readonly.args = {
  defaultValue: "16:16:00",
  readOnly: true,
};

export const requiredEmpty = Template.bind({});

requiredEmpty.storyName = "required empty";
requiredEmpty.args = {
  required: true,
};

export const requiredFilled = Template.bind({});

requiredFilled.storyName = "required filled";
requiredFilled.args = {
  defaultValue: "16:16:00",
  required: true,
};
