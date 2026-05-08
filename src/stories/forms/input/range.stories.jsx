import React from "react";

export default {
  title: 'Forms/<input>/type="range"',
  argTypes: {
    disabled: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    defaultValue: {
      name: "value",
      type: { name: "number", required: false },
      table: {
        type: { summary: "number" },
      },
    },
    min: {
      type: { name: "number", required: false },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    max: {
      type: { name: "number", required: false },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
    },
    step: {
      type: { name: "string", required: false },
      table: {
        type: { summary: 'number | "any"' },
        defaultValue: { summary: "1" },
      },
    },
  },
};

const Template = (args) => <input type="range" {...args} />;

export const range = Template.bind({});

range.storyName = 'type="range"';
range.args = {
  defaultValue: 50,
  min: 0,
  max: 100,
};

export const disabled = Template.bind({});

disabled.storyName = "disabled";
disabled.args = {
  defaultValue: 50,
  min: 0,
  max: 100,
  disabled: true,
};

const WithDatalistTemplate = (args) => (
  <>
    <input type="range" {...args} />

    <datalist id={args.list}>
      <option value="0" label="0%"></option>
      <option value="10"></option>
      <option value="20"></option>
      <option value="30"></option>
      <option value="40"></option>
      <option value="50" label="50%"></option>
      <option value="60"></option>
      <option value="70"></option>
      <option value="80"></option>
      <option value="90"></option>
      <option value="100" label="100%"></option>
    </datalist>
  </>
);

export const withDatalist = WithDatalistTemplate.bind({});

withDatalist.storyName = "with <datalist>";
withDatalist.args = {
  defaultValue: 50,
  min: 0,
  max: 100,
  step: "10",
  list: "tickmarks",
};

export const withDatalistDisabled = WithDatalistTemplate.bind({});

withDatalistDisabled.storyName = "with <datalist> disabled";
withDatalistDisabled.args = {
  defaultValue: 50,
  min: 0,
  max: 100,
  step: "10",
  list: "tickmarks-disabled",
  disabled: true,
};
