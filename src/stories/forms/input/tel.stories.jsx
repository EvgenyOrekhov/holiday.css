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

export const tel = Template.bind({});

tel.storyName = 'type="tel"';

export const placeholder = Template.bind({});

placeholder.storyName = "placeholder";
placeholder.args = {
  placeholder: "123-4567-8901",
};

export const value = Template.bind({});

value.storyName = "value";
value.args = {
  defaultValue: "+61 2 5550 6077",
};

export const disabled = Template.bind({});

disabled.storyName = "disabled";
disabled.args = {
  defaultValue: "+61 2 5550 6077",
  disabled: true,
};

export const readonly = Template.bind({});

readonly.storyName = "readonly";
readonly.args = {
  defaultValue: "+61 2 5550 6077",
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
  defaultValue: "+61 2 5550 6077",
  required: true,
};
