import React from "react";

export default {
  title: "Forms/<select>/multiple",
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
    defaultValue: {
      name: "value",
      type: { name: "array", required: false },
      table: {
        type: { summary: "array" },
        defaultValue: { summary: "[]" },
      },
    },
  },
};

const Template = (args) => (
  <select multiple {...args}>
    <option value="1">Example 1</option>
    <option value="2">Example 2</option>
    <optgroup label="Example">
      <option value="3">Example 3</option>
      <option value="4">Example 4</option>
      <option value="5">Example 5</option>
    </optgroup>
    <optgroup label="Disabled" disabled>
      <option value="6">Disabled 6</option>
      <option value="7">Disabled 7</option>
      <option value="8">Disabled 8</option>
    </optgroup>
  </select>
);

export const select = Template.bind({});

select.storyName = "<select multiple>";

export const disabled = Template.bind({});

disabled.storyName = "disabled";
disabled.args = {
  disabled: true,
};

export const requiredEmpty = Template.bind({});

requiredEmpty.storyName = "required empty";
requiredEmpty.args = {
  required: true,
};

export const requiredFilled = Template.bind({});

requiredFilled.storyName = "required filled";
requiredFilled.args = {
  defaultValue: ["4"],
  required: true,
};
