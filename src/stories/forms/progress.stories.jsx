import React from "react";

export default {
  title: "Forms/<progress>",
  argTypes: {
    value: {
      type: { name: "number", required: false },
      table: {
        type: { summary: "number" },
      },
    },
    max: {
      type: { name: "number", required: false },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
  },
};

const Template = (args) => <progress {...args} />;

export const indeterminate = {
  render: Template,
  name: "indeterminate",

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const empty = {
  render: Template,
  name: "empty",

  args: {
    value: 0,
    max: 100,
  },
};

export const some = {
  render: Template,
  name: "some",

  args: {
    value: 10,
    max: 100,
  },
};

export const half = {
  render: Template,
  name: "half",

  args: {
    value: 50,
    max: 100,
  },
};

export const full = {
  render: Template,
  name: "full",

  args: {
    value: 100,
    max: 100,
  },
};
